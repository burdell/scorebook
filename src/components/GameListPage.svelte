<script>
  import type { ListGame } from '../types'
  import GameList from './GameList.svelte'
  import ListTitle from './List/ListTitle.svelte'

  export let name: string
  export let games: ListGame[]
</script>

<style>
  .game-list {
    width: 50%;
    margin: 0 auto;
  }
</style>

<svelte:head>
  <title>{name}</title>
</svelte:head>

<div class="game-list">
  <div class="category-info">
    <ListTitle>{name}</ListTitle>
  </div>
  <GameList {games} />
</div>
