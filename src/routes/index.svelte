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
  h1 {
    text-align: center;
    margin: 0 auto;
  }

  h1 {
    font-size: 2.8em;
    text-transform: uppercase;
    font-weight: 700;
    margin: 0 0 0.5em 0;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
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
