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

  export let lists: List[] = []
  $: lists = lists
</script>

<style>
  .list {
    padding: 1rem;
    font-size: 1rem;
    box-shadow: 0px 0px 2px 0px rgba(180, 180, 180, 1);
    margin: 1rem;
    transition: 0.1s ease-in-out all;
  }

  .list:hover {
    box-shadow: 0px 0px 3px 0px rgba(180, 180, 180, 1);
  }

  .list-name {
    font-size: 1.5rem;
    font-weight: 800;
  }

  .list-page {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
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

<div class="list-page">
  {#each lists as list}
    <div class="list">
      <a href="/{list.type}/{list.listId}">
        <div class="list-name">{list.name}</div>
        <div class="list-description">{list.description}</div>
      </a>
    </div>
  {/each}
</div>
