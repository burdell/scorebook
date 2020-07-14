<script>
  export let gameplay;
  import AtBat from "./AtBat.svelte";

  const shownGameplay = gameplay.visiting;
</script>

<style>
  .gameplay {
    flex: 8;
  }

  .innings {
    display: flex;
    width: 100%;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0 1rem;
  }

  .inning-header {
    text-align: center;
    font-weight: 800;
  }

  .inning {
    display: flex;
    flex-direction: column;
  }
</style>

<div class="gameplay">
  <div class="innings">
    {#each shownGameplay as inning, index}
      <div class="inning">
        <div class="inning-header">{index + 1}</div>
        {#each inning as atBat}
          <AtBat {atBat} />
        {/each}
      </div>
    {/each}
  </div>
</div>
