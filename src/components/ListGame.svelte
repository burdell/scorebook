<script>
  import type { ListGame } from '../types'

  function formatDate(
    date: string | Date | number,
    options?: Intl.DateTimeFormatOptions,
  ) {
    return new Date(date).toLocaleDateString(
      'en',
      options || {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      },
    )
  }

  export let game: ListGame
</script>

<style>
  .list-game {
    display: flex;
    align-items: center;
    font-size: 1rem;
  }

  .game-info {
    padding: 0.5rem 0;
    margin-bottom: 0.7rem;
    flex: 3;
  }

  .game-description {
    color: var(--gray3);
    font-size: 0.9em;
    text-align: center;
    flex: 2;
    padding: 1rem 0.5rem;
  }

  .game-teams {
    font-size: 1.2em;
    font-weight: 800;
  }

  .game-date {
    font-size: 1rem;
    color: var(--gray3);
  }

  a {
    text-decoration: none;
  }

  @media (max-width: 1100px) {
    .list-game {
      font-size: 0.9rem;
    }
  }
</style>

<a href="/games/{game.id}">
  <div class="list-game">
    <div class="game-info">
      <div class="game-date">{formatDate(game.date)}</div>
      <div class="game-teams">
        <div>{game.visitingTeam} {game.visitingScore}</div>
        <div>{game.homeTeam} {game.homeScore}</div>
      </div>
    </div>
    {#if game.gameDescription}
      <div class="game-description">{game.gameDescription}</div>
    {/if}
  </div>
</a>
