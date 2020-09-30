<script>
  import type { FieldPosition, LineupEntry } from '../../types'
  import LineupPlayer from './LineupPlayer.svelte'
  import Up from '../Icons/Up.svelte'
  import Down from '../Icons/Down.svelte'

  export let lineupEntry: LineupEntry[]
  const shownPlayerCount = 4

  function positionDisplay(positionNumber: FieldPosition) {
    switch (positionNumber) {
      case 1:
        return 'P'
      case 2:
        return 'C'
      case 3:
        return '1B'
      case 4:
        return '2B'
      case 5:
        return '3B'
      case 6:
        return 'SS'
      case 7:
        return 'LF'
      case 8:
        return 'CF'
      case 9:
        return 'RF'
      case 11:
        return 'PH'
      case 10:
        return 'DH'
      case 12:
        return 'PR'
      default:
        return positionNumber
    }
  }

  function scrollUp() {
    offset = offset - 1
  }

  function scrollDown() {
    offset = offset + 1
  }

  $: showControls = lineupEntry.length > shownPlayerCount
  $: offset = 0
  $: shownPlayers = lineupEntry.slice(offset, offset + shownPlayerCount)
</script>

<style>
  .lineup-spot {
    position: relative;
  }

  .position {
    margin-right: 0.5rem;
  }

  button {
    position: absolute;
    right: 0px;
    border-radius: 3px;
    border: none;
    border: 1px solid var(--secondary6);
    background-color: var(--secondary9);
    transition: all 0.2s ease-in-out;
  }

  button:disabled {
    background-color: var(--gray7);
    border: 1px solid var(--gray5);
  }

  button:focus {
    border: 1px solid var(--secondary1);
    outline: none;
  }

  .up {
    top: 0px;
  }

  .down {
    bottom: 0px;
  }
</style>

<div class="lineup-spot">
  {#if showControls}
    <button disabled={offset === 0} on:click={() => scrollUp()} class="up">
      <Up />
    </button>
  {/if}
  {#each shownPlayers as { position, player, inning }}
    <LineupPlayer>
      <div class="position">{positionDisplay(position)}</div>
      <div>{player.name}</div>
      {#if inning > 1}
        <div>&nbsp;({inning})</div>
      {/if}
    </LineupPlayer>
  {/each}
  {#if showControls}
    <button
      disabled={offset + shownPlayerCount >= lineupEntry.length}
      on:click={() => scrollDown()}
      class="down">
      <Down />
    </button>
  {/if}
</div>
