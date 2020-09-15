<script context="module">
  import { getSeason, getSeries } from '../../api/games'

  export async function preload(page, session) {
    const { seasonId } = page.params
    const season = await getSeason(seasonId, this.fetch)
    return { season }
  }
</script>

<script>
  import ListGame from '../../components/ListGame.svelte'
  export let season

  $: loadedSeries = {}
  $: currentlyShownSeriesId = undefined

  const targetTeam = season.targetTeam
  function formatSeriesName(visitingTeam, homeTeam) {
    if (targetTeam === homeTeam) {
      return `vs ${visitingTeam}`
    }

    if (targetTeam === visitingTeam) {
      return `@ ${homeTeam}`
    }

    return `${visitingTeam} @ ${homeTeam}`
  }

  async function loadSeries(seriesId) {
    const series = await getSeries(seriesId, window.fetch)
    loadedSeries[seriesId] = series
  }

  async function showSeries(seriesId) {
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
    grid-template-columns: repeat(3, 1fr);
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
      <div class="list-name">
        {formatSeriesName(series.visitingTeam, series.homeTeam)}
      </div>
      <div class="list-description">{series.startDate}-{series.endDate}</div>
      <div>
        <button on:click={() => showSeries(series.urlSlug)}>Show Series</button>
        {#if currentlyShownSeriesId === series.urlSlug && loadedSeries[series.urlSlug]}
          {#each loadedSeries[series.urlSlug] as seriesGame}
            <ListGame game={seriesGame} />
          {/each}
        {/if}
      </div>
    </div>
  {/each}
</div>
