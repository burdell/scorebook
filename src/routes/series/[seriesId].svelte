<script context="module">
  import { getSeries } from '../../api/games'

  export async function preload(page, session) {
    const { seriesId } = page.params
    const series = await getSeries(seriesId, this.fetch)
    return { series }
  }
</script>

<script>
  import GameListPage from '../../components/GameListPage.svelte'
  export let series
</script>

<div>
  <GameListPage name="Some Series" games={series} />
</div>
