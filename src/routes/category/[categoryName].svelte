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
  import GameList from '../../components/GameList.svelte'
  import ContentContainer from '../../components/Content/ContentContainer.svelte'
  import ListTitle from '../../components/List/ListTitle.svelte'
  import type { Category } from '../../types'

  export let category: Category
</script>

<ContentContainer>
  <ListTitle>{category.categoryName}</ListTitle>
  <GameList games={category.games} />
</ContentContainer>
