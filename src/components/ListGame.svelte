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
    padding: 0.5rem;
    margin-bottom: 0.5rem;
    flex: 3;
  }

  .game-description {
    color: var(--gray2);
    font-size: 0.9em;
    text-align: center;
    flex: 2;
    padding: 0.5rem;
  }

  .game-teams {
    font-size: 1.2em;
    font-weight: 600;
  }

  .game-date {
    font-size: 0.9em;
    color: var(--gray3);
  }

  a {
    text-decoration: none;
  }

  @media (max-width: 768px) {
    .list-game {
      flex-direction: column;
      align-items: flex-start;
    }

    .game-description {
      text-align: left;
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
