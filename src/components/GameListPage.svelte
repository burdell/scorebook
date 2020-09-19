<script>
  import GameList from './GameList.svelte'
  import type { ListGame } from '../types'

  export let name: string
  export let games: ListGame[]
</script>

<style>
  .category-info {
    display: flex;
    justify-content: space-between;
    border: 1px solid hsl(217, 49%, 88%);
    background-color: hsl(217, 49%, 98%);
    border-radius: 5px;
    margin: 0.5rem 1rem;
    padding: 0.5rem 1rem;
  }
</style>

<svelte:head>
  <title>{name}</title>
</svelte:head>

<div>
  <div class="category-info">
    <div>{name}</div>
  </div>
  <GameList {games} />
</div>
