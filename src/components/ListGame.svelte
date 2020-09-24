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
    box-shadow: 0px 0px 3px 0px var(--primary9);
    padding: 1rem;
    margin: 1rem;
    background-color: var(--white9);
    border-radius: 10px;
    transition: 0.2s ease-in-out all;
  }

  .list-game:hover {
    box-shadow: 0px 0px 5px 0px var(--primary9);
    background-color: var(--gray8);
  }

  .game-info {
    margin-bottom: 0.5rem;
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

  a {
    text-decoration: none;
  }
</style>

<div class="list-game">
  <a href="/games/{game.id}">
    <div class="game-info">
      <div class="game-teams">
        {game.visitingTeam} ({game.visitingScore}) @ {game.homeTeam} ({game.homeScore})
      </div>
      <div class="game-time-location">
        {formatDate(game.date)} | {game.location}
      </div>
    </div>
    <div class="game-description">{game.gameDescription}</div>
  </a>
</div>
