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
  .game-info {
    margin-bottom: 0.7rem;
  }

  .game-teams {
    font-size: 1.2rem;
    font-weight: 800;
  }

  .game-description {
    color: #b0b0b0;
    font-size: 0.9rem;
    font-style: italic;
  }

  .game-date {
    color: var(--gray3);
  }

  a {
    text-decoration: none;
  }
</style>

<a href="/games/{game.id}">
  <div class="game-info">
    <div class="game-date">{formatDate(game.date)}</div>
    <div class="game-teams">
      {game.visitingTeam} ({game.visitingScore}) @ {game.homeTeam} ({game.homeScore})
    </div>
  </div>
  <div class="game-description">{game.gameDescription}</div>
</a>
