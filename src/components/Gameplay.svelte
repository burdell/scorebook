<script>
  export let gameplay;
  import AtBat from "./AtBat.svelte";
  import ColumnHeader from "./ColumnHeader.svelte";
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
    padding-right: 1rem;
    height: calc(100vh - 120px);
  }

  .inning {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: center;
  }
</style>

<div class="gameplay">
  <div class="innings">
    {#each gameplay as inning, index}
      <div class="inning">
        <ColumnHeader>{index + 1}</ColumnHeader>
        {#each inning as atBat}
          <AtBat {atBat} />
        {/each}
      </div>
    {/each}
  </div>
</div>
