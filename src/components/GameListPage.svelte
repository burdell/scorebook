<script>
  import GameList from './GameList.svelte'
  import type { ListGame } from '../types'

  export let name: string
  export let games: ListGame[]
</script>

<style>
  .category-info {
    margin: 0.5rem 1rem;
    padding: 0.5rem;
    font-size: 1.5rem;
    border-bottom: 1px solid var(--primary8);
    color: var(--primary8);
    font-weight: 400;
    display: flex;
    justify-content: space-between;
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
