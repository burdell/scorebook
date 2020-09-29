<script>
  import type { Lineup, FieldPosition, PitcherEntry } from '../../types'
  import ColumnHeader from '../Grid/ColumnHeader.svelte'
  import ColumnItem from '../Grid/ColumnItem.svelte'
  import LineupPlayer from './LineupPlayer.svelte'
  import LineupSpot from './LineupSpot.svelte'

  export let lineup: Lineup
  export let teamName: string

  function positionDisplay(positionNumber: FieldPosition) {
    if (positionNumber === 11) return 'PH'
    if (positionNumber === 10) return 'DH'
    if (positionNumber === 12) return 'PR'

    return positionNumber
  }
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
