<script>
  import ColumnHeader from "./ColumnHeader.svelte";
  import ColumnItem from "./ColumnItem.svelte";

  export let lineup;
  export let teamName;
  export let changeTeam;

  function positionDisplay(positionNumber) {
    if (positionNumber === 11) return "PH";
    if (positionNumber === 10) return "DH";

    return positionNumber;
  }
</script>

<style>
  .lineup {
    flex: 2;
    border-right: 1px solid #000;
  }

  .lineup-player {
    display: flex;
    padding: 0 0.5rem;
    border-bottom: 1px dashed #a2a2a2;
    font-size: 0.8rem;
  }

  .position {
    margin-right: 0.5rem;
  }

  button {
    background: none;
    border: none;
    color: blue;
    text-decoration: underline;
    cursor: pointer;
  }
</style>

<div class="lineup">
  <ColumnHeader>
    <div>{teamName}</div>
    <button on:click={changeTeam}>(Switch)</button>
  </ColumnHeader>
  {#each lineup as lineupEntry, i}
    <ColumnItem>
      <div class="lineup-spot">
        {#each lineupEntry as { position, player, inning }}
          <div class="lineup-player">
            <div class="position">{positionDisplay(position)}</div>
            <div>{player.name}</div>
            {#if inning > 1}
              <div>&nbsp;({inning})</div>
            {/if}
          </div>
        {/each}
      </div>
    </ColumnItem>
  {/each}
</div>
