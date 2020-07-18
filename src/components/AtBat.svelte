<script>
  import Count from "./Count.svelte";
  import ColumnItem from "./ColumnItem.svelte";
  import Basepaths from "./Basepaths.svelte";

  export let atBat;
</script>

<style>
  .at-bat {
    padding: 1rem;
    flex: 1;
    box-sizing: border-box;
    text-align: center;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid black;
    height: 100%;
  }

  .out {
    background-color: rgb(244, 154, 154);
    border-radius: 50%;
    height: 7px;
    width: 7px;
    position: absolute;
    top: 5px;
    right: 5px;
  }
</style>

<ColumnItem>
  <div class="at-bat">
    {#if atBat && atBat.result}
      <Basepaths result={atBat.result} bases={atBat.bases} />
      <Count balls={atBat.balls} strikes={atBat.strikes} />
      {#if atBat.isOut}
        <div class="out" />
      {/if}
    {/if}
  </div>
</ColumnItem>
