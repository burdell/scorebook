<script context="module">
  import { getAllLists } from '../api'

  export const preload: typeof SapperPreload = async function (_page, session) {
    const lists = await getAllLists({
      fetch: this.fetch,
      gameApi: session.API_URL,
    })
    return { lists }
  }
</script>

<script>
  import type { List as ListType } from '../types'
  import ContentPage from '../components/Content/ContentPage.svelte'
  import ListItem from '../components/List/ListItem.svelte'

  export let lists: ListType[] = []
  $: lists = lists
</script>

<style>
  .list-name {
    font-size: 1.5rem;
    font-weight: 800;
  }

  .list-description {
    font-size: 0.8rem;
    color: #b0b0b0;
  }

  a {
    text-decoration: none;
  }
</style>

<svelte:head>
  <title>Scorebook</title>
</svelte:head>

<ContentPage>
  {#each lists as list}
    <ListItem>
      <a href="/{list.type}/{list.listId}">
        <div>
          <div class="list-name">{list.name}</div>
          <div class="list-description">{list.description}</div>
        </div>
      </a>
    </ListItem>
  {/each}
</ContentPage>
