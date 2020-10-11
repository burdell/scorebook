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
    font-weight: 600;
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
