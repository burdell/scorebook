<script context="module">
  import { getGame } from "../../api/games";

  export async function preload(page, session) {
    const { gameId } = page.params;
    const game = await getGame(gameId, this.fetch);

    return { game };
  }
</script>

<script>
  export let game;

  console.log(game);

  import Lineup from "../../components/Lineup.svelte";
  import Gameplay from "../../components/Gameplay.svelte";
</script>

<style>
  .game-info {
    display: flex;
    justify-content: space-between;
    border: 1px solid hsl(217, 49%, 88%);
    background-color: hsl(217, 49%, 98%);
    border-radius: 5px;
    margin: 0.5rem 1rem;
    padding: 0.5rem 1rem;
  }

  .game {
    display: flex;
  }
</style>

<svelte:head>
  <title>
    {game.gameInfo.visitingTeam} @ {game.gameInfo.homeTeam} | {game.gameInfo.date}
  </title>
</svelte:head>

<div class="game-info">
  <div>{game.gameInfo.visitingTeam} @ {game.gameInfo.homeTeam}</div>
  <div>
    {new Date(game.gameInfo.date).toLocaleDateString()} @ {game.gameInfo.startTime}
  </div>
  <div>{game.gameInfo.location}</div>
</div>
<div class="game">
  <Lineup lineup={game.lineups.visiting} />
  <Gameplay gameplay={game.gameplay} />
</div>

<div class="content" />
