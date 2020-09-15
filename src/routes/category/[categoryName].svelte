<script context="module">
  import { getList } from '../../api/games'
  import GameListPage from '../../components/GameListPage.svelte'

  export async function preload(page, session) {
    const { categoryName } = page.params
    const category = await getList(categoryName, this.fetch)

    return { category }
  }
</script>

<script>
  export let category
</script>

<div>
  <GameListPage name={category.categoryName} games={category.games} />
</div>
