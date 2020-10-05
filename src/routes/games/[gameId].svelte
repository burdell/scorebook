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
  import Lineup from '../../components/Game/Lineup.svelte'
  import Gameplay from '../../components/Game/Gameplay.svelte'
  import GameStats from '../../components/GameStats/GameStats.svelte'
  import LineupPlayer from '../../components/Game/LineupPlayer.svelte'
  import ColumnHeader from '../../components/Grid/ColumnHeader.svelte'

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

  $: showingVisiting = shownTeam === visitingTeamName
  $: shownLineup = showingVisiting ? game.lineups.visiting : game.lineups.home
  $: shownGameplay = showingVisiting
    ? game.gameplay.visiting
    : game.gameplay.home
  $: shownPitchers = showingVisiting
    ? game.pitchers.visiting
    : game.pitchers.home
</script>

<style>
  .game-container {
    padding: 0.5rem;
    display: inline-block;
    min-width: 100%;
    box-sizing: border-box;
  }

  .gameplay {
    display: flex;
  }

  .gameplay-container {
    background-color: var(--white9);
  }

  .game-info {
    background-color: var(--white9);
    padding: 0.5rem 1rem;
    border-radius: 10px 10px 0 0;
    border-bottom: 1px solid var(--gray4);
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    background-color: var(--gray9);
  }

  .game-info button {
    background: none;
    color: var(--secondary1);
    border: none;
    padding: 0.1rem;
    cursor: pointer;
    font-family: inherit;
    font-size: inherit;
    outline: none;
    transition: 0.2s all ease-in-out;
  }

  .shown-team {
    text-decoration: underline;
  }

  .stats {
    display: flex;
  }

  .left-column {
    flex: 2;
    min-width: 175px;
  }
  .main-content {
    flex: 10;
    text-align: right;
  }

  .pitchers,
  .scoring {
    background-color: var(--white9);
    border-radius: 0 0 10px 10px;
  }

  .scoring {
    display: inline-block;
  }

  .pitcher-entry {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .pitcher-container {
    border-bottom: 1px dashed var(--gray4);
  }
  .pitcher-container:last-child {
    border-bottom: none;
  }
</style>

<svelte:head>
  <title>Scorebook | {visitingTeamName} @ {homeTeamName}</title>
</svelte:head>

<div class="game-container">
  <div class="game-info">
    <div>
      <button
        on:click={() => changeTeam(visitingTeamName)}
        class={showingVisiting ? 'shown-team' : ''}>
        {visitingTeamName}
      </button>
      @
      <button
        on:click={() => changeTeam(homeTeamName)}
        class={!showingVisiting ? 'shown-team' : ''}>
        {homeTeamName}
      </button>
    </div>
    <div>{formatDate(game.gameInfo.date)} @ {game.gameInfo.startTime}</div>
    <div>{game.gameInfo.location}</div>
  </div>
  <div class="gameplay-container">
    <div class="gameplay">
      <div class="left-column">
        <Lineup lineup={shownLineup} teamName={shownTeam} />
      </div>
      <div class="main-content">
        <Gameplay gameplay={shownGameplay} />
      </div>
    </div>
  </div>
  <div class="stats">
    <div class="pitchers left-column">
      <ColumnHeader>Pitchers</ColumnHeader>
      {#each shownPitchers as pitcher}
        <div class="pitcher-container">
          <LineupPlayer>
            <div class="pitcher-entry">
              <div>
                {pitcher.player.name}
                {pitcher.player.type === 'sub' ? `(${pitcher.player.inningEntered})` : ''}
              </div>
              <div>{pitcher.stats.er} ER</div>
            </div>
          </LineupPlayer>
        </div>
      {/each}
    </div>
    <div class="main-content">
      <div class="scoring">
        <GameStats {game} />
      </div>
    </div>
  </div>
</div>
