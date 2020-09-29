<script>
  import type { Lineup, FieldPosition, PitcherEntry } from '../../types'
  import ColumnHeader from '../Grid/ColumnHeader.svelte'
  import ColumnItem from '../Grid/ColumnItem.svelte'
  import LineupPlayer from './LineupPlayer.svelte'

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

  .position {
    margin-right: 0.5rem;
  }
</style>

<div class="lineup">
  <ColumnHeader>
    <div>{teamName}</div>
  </ColumnHeader>
  {#each lineup as lineupEntry}
    <ColumnItem>
      <div class="lineup-spot">
        {#each lineupEntry as { position, player, inning }}
          <LineupPlayer>
            <div class="position">{positionDisplay(position)}</div>
            <div>{player.name}</div>
            {#if inning > 1}
              <div>&nbsp;({inning})</div>
            {/if}
          </LineupPlayer>
        {/each}
      </div>
    </ColumnItem>
  {/each}
</div>
