<script>
  import type { Lineup } from '../../types'
  import ColumnHeader from '../Grid/ColumnHeader.svelte'
  import ColumnItem from '../Grid/ColumnItem.svelte'
  import LineupSpot from './LineupSpot.svelte'

  export let lineup: Lineup
  export let teamName: string
</script>

<style>
  .lineup {
    border-right: 1px solid var(--gridColor);
  }
</style>

<div class="lineup">
  <ColumnHeader>
    <div>{teamName}</div>
  </ColumnHeader>
  {#each lineup as lineupEntry}
    <ColumnItem>
      <LineupSpot {lineupEntry} />
    </ColumnItem>
  {/each}
</div>
