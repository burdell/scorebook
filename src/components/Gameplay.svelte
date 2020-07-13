<script>
  export let gameplay;

  const shownGameplay = gameplay.home;
  console.log(shownGameplay);
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
    flex: 1;
  }

  .inning {
    display: flex;
    flex-direction: column;
  }
</style>

<div class="gameplay">
  <div class="innings">
    {#each shownGameplay as inning, index}
      <div class="inning-header">{index + 1}</div>
      <div class="inning">
        {#each inning as atBat}
          <div>{atBat && atBat.result ? atBat.result.display : ''}</div>
        {/each}
      </div>
    {/each}
  </div>
</div>
