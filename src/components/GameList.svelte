<script>
  import ListGame from "./ListGame.svelte";

  export let games;
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
