<script context="module">
  import { getGames } from "../api/games";

  export async function preload(page, session) {
    const games = await getGames(this.fetch);

    return { games };
  }
</script>

<script>
  export let games;
</script>

<style>

</style>

<svelte:head>
  <title>Scorebook</title>
</svelte:head>

<div>
  {#each games as game}
    <a href={`/games/${game.id}`}>
      {game.gameInfo.visitingTeam} @ {game.gameInfo.homeTeam} | {game.gameInfo.date}
    </a>
  {/each}
</div>
