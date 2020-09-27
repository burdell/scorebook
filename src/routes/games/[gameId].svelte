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
  import Content from '../../components/Content/Content.svelte'
  import Lineup from '../../components/Game/Lineup.svelte'
  import Gameplay from '../../components/Game/Gameplay.svelte'
  import GameStats from '../../components/GameStats.svelte'

  export let game: Game

  const visitingTeam = game.gameInfo.visitingTeam
  const homeTeam = game.gameInfo.homeTeam

  const visitingTeamName = visitingTeam.fullName
  const homeTeamName = homeTeam.fullName

  function formatDate(date: string) {
    return new Date(date).toLocaleDateString('en', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })
  }

  let shownTeam = visitingTeamName
  function changeTeam(teamName: string) {
    shownTeam = teamName
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
  .game-container {
    padding: 0.5rem;
  }

  .gameplay {
    display: flex;
  }

  .gameplay-container {
    border-radius: 0 10px 10px 10px;
    background-color: var(--white9);
  }

  .game-info {
    background-color: var(--white9);
    padding: 0.5rem 1rem;
    border-radius: 10px 10px 0 0;
    display: inline-flex;
    margin: 0 auto;
  }

  .game-info > div:not(:last-child):after {
    content: '|';
    color: var(--gray5);
    padding: 0 0.5rem;
  }

  .game-info button {
    background: none;
    color: var(--secondary1);
    border: none;
    padding: 0.1rem;
    cursor: pointer;
    font-family: inherit;
    text-decoration: underline;
    font-size: inherit;
  }

  .stats {
    background-color: var(--white9);
  }
</style>

<svelte:head>
  <title>{visitingTeamName} @ {homeTeamName} | {game.gameInfo.date}</title>
</svelte:head>

<div class="game-container">
  <div class="game-info">
    <div>
      <button on:click={() => changeTeam(visitingTeamName)}>
        {visitingTeamName}
      </button>
      @
      <button on:click={() => changeTeam(homeTeamName)}>{homeTeamName}</button>
    </div>
    <div>{formatDate(game.gameInfo.date)} @ {game.gameInfo.startTime}</div>
    <div>{game.gameInfo.location}</div>
  </div>
  <div class="gameplay-container">
    <div class="gameplay">
      <Lineup lineup={shownLineup} teamName={shownTeam} />
      <Gameplay gameplay={shownGameplay} />
    </div>
  </div>
  <div class="stats">
    <GameStats {game} {shownPitchers} />
  </div>
</div>
