<script context="module">
  import { getGame } from '../../api'

  export const preload: typeof SapperPreload = async function (page, session) {
    const { gameId } = page.params
    const game = await getGame(gameId, {
      fetch: this.fetch,
      gameApi: session.API_URL,
    })

    return { game }
  }
</script>

<script>
  import type { Game } from '../../types'
  import Lineup from '../../components/Lineup.svelte'
  import Gameplay from '../../components/Gameplay.svelte'
  import GameStats from '../../components/GameStats.svelte'

  export let game: Game

  const visitingTeam = game.gameInfo.visitingTeam
  const homeTeam = game.gameInfo.homeTeam

  const visitingTeamName = visitingTeam.fullName
  const homeTeamName = homeTeam.fullName

  let shownTeam = visitingTeamName
  function changeTeam() {
    if (shownTeam === visitingTeamName) {
      shownTeam = homeTeamName
    } else {
      shownTeam = visitingTeamName
    }
  }

  $: showingVisting = shownTeam === visitingTeamName
  $: shownLineup = showingVisting ? game.lineups.visiting : game.lineups.home
  $: shownGameplay = showingVisting
    ? game.gameplay.visiting
    : game.gameplay.home
  $: shownPitchers = showingVisting
    ? game.pitchers.visiting
    : game.pitchers.home
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
  <title>{visitingTeamName} @ {homeTeamName} | {game.gameInfo.date}</title>
</svelte:head>

<div class="game-info">
  <div>{visitingTeamName} @ {homeTeamName}</div>
  <div>
    {new Date(game.gameInfo.date).toLocaleDateString()} @ {game.gameInfo.startTime}
  </div>
  <div>{game.gameInfo.location}</div>
</div>
<div class="game">
  <Lineup lineup={shownLineup} teamName={shownTeam} {changeTeam} />
  <Gameplay gameplay={shownGameplay} />
</div>
<div class="stats">
  <GameStats {game} {shownPitchers} />
</div>
