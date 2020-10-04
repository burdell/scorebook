<script>
  import type { Game } from '../../types'

  import ScoringSummary from './ScoringSummary.svelte'

  export let game: Game

  const visitingTeam = game.gameInfo.visitingTeam
  const homeTeam = game.gameInfo.homeTeam

  const visitingStats = game.stats.visiting
  const homeStats = game.stats.home
</script>

<style>
  .game-stats {
    display: flex;
    justify-content: space-around;
    padding-top: 0.5rem;
  }
</style>

<div class="game-stats">
  <div class="scoring">
    <ScoringSummary
      team={visitingTeam.abbreviation}
      scoring={visitingStats.scoring}
      runs={visitingStats.runs}
      hits={visitingStats.hits}
      errors={homeStats.errors} />
    <ScoringSummary
      team={homeTeam.abbreviation}
      scoring={homeStats.scoring}
      runs={homeStats.runs}
      hits={homeStats.hits}
      errors={visitingStats.errors} />
  </div>
</div>
