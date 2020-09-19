<script>
  import type { ListGame as ListGameType } from '../types'
  import ListGame from './ListGame.svelte'

  export let games: ListGameType[]
</script>

<style>
  .game-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
</style>

<div class="game-list">
  {#each games as game}
    <ListGame {game} />
  {/each}
</div>
