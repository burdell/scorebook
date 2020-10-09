<script context="module">
  import { getSeriesList } from '../../api'

  export const preload: typeof SapperPreload = async function (page, session) {
    const { seriesListId } = page.params
    const seriesList = await getSeriesList(seriesListId, {
      fetch: this.fetch,
      gameApi: session.API_URL,
    })
    return { seriesList }
  }
</script>

<script>
  import type { Series, Season } from '../../types'
  import Content from '../../components/Content/Content.svelte'
  import ListItem from '../../components/List/ListItem.svelte'
  import ListTitle from '../../components/List/ListTitle.svelte'
  import { getMonthDayRange } from '../../utils/date'
  import ContentContainer from '../../components/Content/ContentContainer.svelte'

  export let seriesList: Season

  const targetTeam = seriesList.targetTeam
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

  const seriesByMonth: {
    [monthYear: string]: { monthYear: string; series: Series[] }
  } = {}
  seriesList.series.forEach((s) => {
    const monthYear = new Date(s.startDate).toLocaleDateString('en', {
      month: 'long',
      year: 'numeric',
    })

    if (!seriesByMonth[monthYear])
      seriesByMonth[monthYear] = { monthYear, series: [] }

    seriesByMonth[monthYear].series.push(s)
  })
  const shownSeries = Object.values(seriesByMonth)
</script>

<style>
  .series-info {
    font-size: 1.2rem;
    font-weight: 600;
  }

  .series-date {
    font-size: 0.8rem;
    color: var(--gray3);
  }

  a {
    text-decoration: none;
  }
</style>

<svelte:head>
  <title>Scorekeeper | {seriesList.name}</title>
</svelte:head>

<ContentContainer>
  {#each shownSeries as shownSeries}
    <ListTitle>{shownSeries.monthYear}</ListTitle>
    <Content>
      {#each shownSeries.series as series}
        <ListItem>
          <a href={`/series/${series.seriesId}`}>
            <div class="series-info">{getSeriesInfo(series)}</div>
            <div class="series-date">{getMonthDayRange(series)}</div>
          </a>
        </ListItem>
      {/each}
    </Content>
  {/each}
</ContentContainer>
