<script>
  import ScoringSummary from './ScoringSummary.svelte'

  export let game
  export let shownPitchers

  const visitingTeam = game.gameInfo.visitingTeam
  const homeTeam = game.gameInfo.homeTeam

  const visitingStats = game.stats.visiting
  const homeStats = game.stats.home

  const pitchers = game.pitchers.home
</script>

<style>
  .game-stats {
    display: flex;
    justify-content: space-around;
    padding: 0.5rem 1rem;
  }

  .scoring {
    border: 1px solid black;
    padding: 0.3rem;
  }

  .header {
    font-weight: 800;
  }
</style>

<div class="game-stats">
  <div class="pitching">
    <div class="header">Pitchers</div>
    {#each shownPitchers as pitcher}
      <div>
        {pitcher.player.name}
        {pitcher.player.type === 'sub' ? `(${pitcher.player.inningEntered})` : ''}
        - {pitcher.stats.er} ER
      </div>
    {/each}
  </div>
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
