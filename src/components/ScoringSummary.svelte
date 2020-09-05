<script>
  export let team;
  export let scoring;
  export let runs;
  export let hits;
  export let errors;
</script>

<style>
  .scoring-summary {
    display: flex;
    align-items: center;
  }

  .team-name {
    flex: 2;
    min-width: 40px;
  }

  .number {
    padding: 0.2rem;
    flex: 1;
    min-width: 15px;
  }

  .total {
    font-weight: 800;
  }
</style>

<div class="scoring-summary">
  <div class="team-name">{team}</div>
  {#each scoring as inningRuns}
    <div class="number">{inningRuns}</div>
  {/each}
  <div class="number total">{runs}</div>
  <div class="number total">{hits}</div>
  <div class="number total">{errors}</div>
</div>
