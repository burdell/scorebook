<script>
  export let team: string
  export let scoring: number[]
  export let runs: number
  export let hits: number
  export let errors: number
</script>

<style>
  .scoring-summary {
    display: flex;
    align-items: center;
    font-size: 1rem;
  }

  .scoring-summary:first-child {
    border-bottom: 1px solid var(--gridColor);
  }

  .team-name {
    flex: 2;
    min-width: 40px;
    border-right: 1px solid var(--gridColor);
    text-align: center;
    padding: 0 0.5rem;
  }

  .number {
    padding: 0.3rem;
    flex: 1;
    min-width: 15px;
  }

  .total {
    font-weight: 900;
    text-align: center;
  }

  .inning {
    border-right: 1px solid var(--gridColor);
    text-align: center;
  }
  .inning:first-child {
    border-left: 1px solid var(--gridColor);
  }
</style>

<div class="scoring-summary">
  <div class="team-name">{team}</div>
  {#each scoring as inningRuns}
    <div class="number inning">{inningRuns}</div>
  {/each}
  <div class="number total">{runs}</div>
  <div class="number total">{hits}</div>
  <div class="number total">{errors}</div>
</div>
