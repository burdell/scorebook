<script>
  export let lineup;
</script>

<style>
  .lineup {
    flex: 2;
    border-right: 1px solid #000;
  }

  .lineup-spot {
    padding: 0.5rem;
    border-bottom: 1px solid #000;
  }

  .lineup-player {
    display: flex;
  }

  .position {
    margin-right: 0.5rem;
  }
</style>

<div class="lineup">
  {#each lineup as lineupEntry, i}
    <div class="lineup-spot">
      {#each lineupEntry as { position, player }}
        <div class="lineup-player">
          <div class="position">{position}</div>
          <div>{player.name}</div>
        </div>
      {/each}
    </div>
  {/each}
</div>
