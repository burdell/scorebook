<script context="module">
  import type { SeriesGames } from '../../types'
  import { getSeriesGroup } from '../../api'

  export const preload: typeof SapperPreload = async function (page, session) {
    const { seriesGroupId } = page.params
    const seriesGroup = await getSeriesGroup(seriesGroupId, {
      fetch: this.fetch,
      gameApi: session.API_URL,
    })
    return { seriesGroup }
  }
</script>

<script>
  import Series from '../../components/Series.svelte'
  import ContentContainer from '../../components/Content/ContentContainer.svelte'

  export let seriesGroup: SeriesGames[]

  function getSeriesDisplay(series: SeriesGames) {
    return (
      series.seriesInfo.seriesName ||
      `${series.seriesInfo.visitingTeam} @ ${series.seriesInfo.homeTeam}`
    )
  }
</script>

<ContentContainer>
  {#each seriesGroup as series}
    <Series
      display={getSeriesDisplay(series)}
      games={series.games}
      info={series.seriesInfo} />
  {/each}
</ContentContainer>
