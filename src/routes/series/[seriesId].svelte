<script context="module">
  import type { SeriesGames } from '../../types'
  import { getSeries } from '../../api'

  export const preload: typeof SapperPreload = async function (page, session) {
    const { seriesId } = page.params
    const series = await getSeries(seriesId, {
      fetch: this.fetch,
      gameApi: session.API_URL,
    })
    return { series }
  }
</script>

<script>
  import Series from '../../components/Series.svelte'
  import ContentContainer from '../../components/Content/ContentContainer.svelte'

  export let series: SeriesGames

  const seriesDisplay =
    series.seriesInfo.seriesName ||
    `${series.seriesInfo.visitingTeam} @ ${series.seriesInfo.homeTeam}`
</script>

<svelte:head>
  <title>Scorebook | {seriesDisplay}</title>
</svelte:head>

<ContentContainer>
  <Series display={seriesDisplay} games={series.games} />
</ContentContainer>
