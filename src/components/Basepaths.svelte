<script>
  export let result;
  export let bases;

  $: baseDisplays = bases.map(base => {
    const results = [];
    if (base.isAtBatResult) {
      results.push(result.display);
    }

    if (base.result) {
      results.push(base.result.display);
    }

    if (base.onBasePutout) {
      results.push(base.onBasePutout.display);
    }

    return results.join(", ");
  });

  function getLastBaseReached(currentBases) {
    if (!currentBases || currentBases.length === 0) return 0;

    const lastBaseAttempted = currentBases[currentBases.length - 1];
    return lastBaseAttempted.advanced
      ? currentBases.length
      : currentBases.length - 1;
  }
  $: lastBaseReached = getLastBaseReached(bases);
</script>

<style>
  .result-container {
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
  }

  .basepaths {
    height: 35px;
    width: 35px;
    transform: rotate(45deg);
    top: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #e2e2e2;
  }

  .result-display {
    font-size: 0.7rem;
  }

  .centered-result {
    transform: rotate(-45deg);
  }

  .base-result {
    position: absolute;
    font-size: 0.6rem;
  }

  .base-result-1 {
    transform: rotate(-45deg) translateX(33px);
  }

  .base-result-2 {
    transform: rotate(-45deg) translateY(-31px);
  }

  .base-result-3 {
    transform: rotate(-45deg) translateX(-33px);
  }

  .base-result-4 {
    transform: rotate(-45deg) translateY(33px);
  }

  .reached-1 {
    border-right: 1px solid black;
  }

  .reached-2 {
    border-right: 1px solid black;
    border-top: 1px solid black;
  }

  .reached-3 {
    border-right: 1px solid black;
    border-top: 1px solid black;
    border-left: 1px solid black;
  }

  .reached-4 {
    border: 1px solid black;
    background-color: #e1e1e1;
  }
</style>

<div>
  <div class="result-container">
    <div class="basepaths reached-{lastBaseReached}">
      {#if bases.length === 0}
        <div class="result-display centered-result">{result.display}</div>
      {/if}
      {#each baseDisplays as baseDisplay, index}
        <div class="result-display base-result base-result-{index + 1}">
          {baseDisplay}
        </div>
      {/each}
    </div>
  </div>
</div>
