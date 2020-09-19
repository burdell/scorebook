<script context="module" lang="ts">
  import { getCategories } from '../../api'

  export const preload: typeof SapperPreload = async function (page, session) {
    const { categoryName } = page.params
    const category = await getCategories(categoryName, {
      fetch: this.fetch,
      gameApi: session.API_URL,
    })

    return { category }
  }
</script>

<script>
  import GameListPage from '../../components/GameListPage.svelte'
  import type { Category } from '../../types'

  export let category: Category
</script>

<div>
  <GameListPage name={category.categoryName} games={category.games} />
</div>
