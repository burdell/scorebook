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
  import GameList from '../../components/GameList.svelte'
  import ContentContainer from '../../components/Content/ContentContainer.svelte'
  import ListTitle from '../../components/List/ListTitle.svelte'
  import { getMonthDayRange } from '../../utils/date'

  export let series: SeriesGames

  const seriesDisplay =
    series.seriesInfo.seriesName ||
    `${series.seriesInfo.visitingTeam} @ ${series.seriesInfo.homeTeam}`
</script>

<ContentContainer>
  <ListTitle>
    <div>{seriesDisplay}</div>
    <div>{getMonthDayRange(series.seriesInfo, true)}</div>
  </ListTitle>
  <GameList games={series.games} />
</ContentContainer>
