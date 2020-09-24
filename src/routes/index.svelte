<script context="module">
  import { getAllLists } from '../api'

  export const preload: typeof SapperPreload = async function (page, session) {
    const lists = await getAllLists({
      fetch: this.fetch,
      gameApi: session.API_URL,
    })
    return { lists }
  }
</script>

<script>
  import type { List } from '../types'
  import ListPage from '../components/ListPage.svelte'

  export let lists: List[] = []
  $: lists = lists
</script>

<style>
  .list-item {
    font-size: 1rem;
    transition: 0.2s ease-in-out all;
    padding: 1rem 2rem;
    display: block;
    background-color: var(--white9);
  }

  .list-item:hover {
    background-color: var(--gray8);
  }

  .list-item:first-child {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .list-item:last-child {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }

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

<ListPage>
  {#each lists as list}
    <a class="list-item" href="/{list.type}/{list.listId}">
      <div class="list">
        <div class="list-name">{list.name}</div>
        <div class="list-description">{list.description}</div>
      </div>
    </a>
  {/each}
</ListPage>
