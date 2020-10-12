<script>
  import type { AtBat } from '../../types'

  import Count from './Count.svelte'
  import ColumnItem from '../Grid/ColumnItem.svelte'
  import Basepaths from './Basepaths.svelte'

  export let atBat: AtBat
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
    border-right: 1px solid var(--gridColor);
    height: 100%;
    min-width: var(--minGrid);
  }

  .out {
    background-color: var(--tertiary8);
    border-radius: 50%;
    height: 0.4rem;
    width: 0.4rem;
    position: absolute;
    top: 5px;
    right: 5px;
  }

  .sacrifice {
    background-color: var(--secondary9);
    border: 1px solid var(--secondary7);
    border-radius: 10px;
    position: absolute;
    bottom: 5px;
    left: 5px;
    color: var(--secondary4);
    font-size: 0.5rem;
    font-weight: 800;
    padding: 0 0.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>

<ColumnItem>
  <div class="at-bat">
    {#if atBat && atBat.result}
      {#if atBat.isSacrifice}
        <div class="sacrifice">SAC</div>
      {/if}
      <Basepaths result={atBat.result} bases={atBat.bases} />
      <Count balls={atBat.balls} strikes={atBat.strikes} />
      {#if atBat.isOut}
        <div class="out" />
      {/if}
    {/if}
  </div>
</ColumnItem>
