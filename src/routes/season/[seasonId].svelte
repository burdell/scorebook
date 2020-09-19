<script context="module">
  import { getSeason, getSeries } from '../../api'

  export const preload: typeof SapperPreload = async function (page, session) {
    const { seasonId } = page.params
    const season = await getSeason(seasonId, {
      fetch: this.fetch,
      gameApi: session.API_URL,
    })
    return { season }
  }
</script>

<script>
  import { stores } from '@sapper/app'
  import type { Series, Season, ListGame as ListGameType } from '../../types'
  import ListGame from '../../components/ListGame.svelte'
  export let season: Season

  let gameApi = ''
  stores().session.subscribe(({ API_URL }: any) => {
    gameApi = API_URL
  })

  const loaded: { [seriesId: string]: ListGameType[] } = {}
  $: loadedSeries = loaded

  let shown: string | undefined = undefined
  $: currentlyShownSeriesId = shown

  const targetTeam = season.targetTeam
  function getTeamDisplay(homeTeam: string, visitingTeam: string) {
    if (targetTeam === homeTeam) {
      return `vs ${visitingTeam}`
    }

    if (targetTeam === visitingTeam) {
      return `@ ${homeTeam}`
    }

    return `${visitingTeam} @ ${homeTeam}`
  }
  function getSeriesInfo({
    visitingTeam,
    homeTeam,
    homeWins,
    visitingWins,
    seriesName,
  }: Series) {
    const seriesDisplay = seriesName || getTeamDisplay(homeTeam, visitingTeam)

    const isVisiting = targetTeam === visitingTeam
    const targetRuns = isVisiting ? visitingWins : homeWins
    const otherRuns = isVisiting ? homeWins : visitingWins

    return `${seriesDisplay} (${targetRuns}-${otherRuns})`
  }

  async function loadSeries(seriesId: string) {
    const series = await getSeries(seriesId, {
      fetch: window.fetch,
      gameApi,
    })
    loadedSeries[seriesId] = series
  }

  async function showSeries(seriesId: string) {
    const shownSeries = loadedSeries[seriesId]

    if (!shownSeries) {
      await loadSeries(seriesId)
    }

    currentlyShownSeriesId = seriesId
  }
</script>

<style>
  .list {
    padding: 1rem;
    font-size: 1rem;
    box-shadow: 0px 0px 2px 0px rgba(180, 180, 180, 1);
    margin: 1rem;
    transition: 0.1s ease-in-out all;
  }

  .list:hover {
    box-shadow: 0px 0px 3px 0px rgba(180, 180, 180, 1);
  }

  .list-name {
    font-size: 1.5rem;
    font-weight: 800;
  }

  .list-page {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .list-description {
    font-size: 0.8rem;
    color: #b0b0b0;
  }
</style>

<svelte:head>
  <title>{season.name}</title>
</svelte:head>

<div class="list-page">
  {#each season.series as series}
    <div class="list">
      <div class="list-name">{getSeriesInfo(series)}</div>
      <div class="list-description">{series.startDate}-{series.endDate}</div>
      <div>
        <button on:click={() => showSeries(series.seriesId)}>
          Show Series
        </button>
        {#if currentlyShownSeriesId === series.seriesId && loadedSeries[series.seriesId]}
          {#each loadedSeries[series.seriesId] as seriesGame}
            <ListGame game={seriesGame} />
          {/each}
        {/if}
      </div>
    </div>
  {/each}
</div>
