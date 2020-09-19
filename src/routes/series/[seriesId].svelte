<script context="module">
  import type { ListGame } from '../../types'
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
  import GameListPage from '../../components/GameListPage.svelte'

  export let series: ListGame[] = []
</script>

<div>
  <GameListPage name="Some Series" games={series} />
</div>
