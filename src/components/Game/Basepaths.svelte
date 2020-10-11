<script>
  import type { AtBatResult, BaseResult } from '../../types'

  export let result: AtBatResult
  export let bases: BaseResult[]

  $: baseDisplays = bases.map((base) => {
    const results = []
    if (base.isAtBatResult) {
      results.push(result.display)
    }

    if (base.result) {
      results.push(base.result.display)
    }

    if (base.onBasePutout) {
      results.push(base.onBasePutout.display)
    }

    return results.join(', ')
  })

  function getLastBaseReached(currentBases: BaseResult[]) {
    if (!currentBases || currentBases.length === 0) return 0

    const lastBaseAttempted = currentBases[currentBases.length - 1]
    return lastBaseAttempted.advanced
      ? currentBases.length
      : currentBases.length - 1
  }
  $: lastBaseReached = getLastBaseReached(bases)
  $: isLookingStrikeout = result.result === 'K-looking'
</script>

<style>
  .result-container {
    --basepathColor: var(--gray2);
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
  }

  .basepaths {
    height: 2.1rem;
    width: 2.1rem;
    transform: rotate(45deg);
    top: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--gray5);
  }

  .result-display {
    font-size: 0.8rem;
    font-weight: 500;
  }

  .centered-result {
    transform: rotate(-45deg);
  }

  .base-result {
    position: absolute;
    font-size: 0.7rem;
  }

  .base-result-1 {
    transform: rotate(-45deg) translateX(2rem);
  }

  .base-result-2 {
    transform: rotate(-45deg) translateY(-1.9rem);
  }

  .base-result-3 {
    transform: rotate(-45deg) translateX(-2rem);
  }

  .base-result-4 {
    transform: rotate(-45deg) translateY(2rem);
  }

  .reached-1 {
    border-right: 1px solid var(--basepathColor);
  }

  .reached-2 {
    border-right: 1px solid var(--basepathColor);
    border-top: 1px solid var(--basepathColor);
  }

  .reached-3 {
    border-right: 1px solid var(--basepathColor);
    border-top: 1px solid var(--basepathColor);
    border-left: 1px solid var(--basepathColor);
  }

  .reached-4 {
    border: 1px solid var(--basepathColor);
    background-color: var(--gray6);
  }

  .looking-strikeout {
    transform: rotate(-45deg) scaleX(-1);
  }
</style>

<div>
  <div class="result-container">
    <div class="basepaths reached-{lastBaseReached}">
      {#if bases.length === 0}
        <div
          class="result-display centered-result {isLookingStrikeout ? 'looking-strikeout' : ''}">
          {result.display}
        </div>
      {/if}
      {#each baseDisplays as baseDisplay, index}
        <div class="result-display base-result base-result-{index + 1}">
          {baseDisplay}
        </div>
      {/each}
    </div>
  </div>
</div>
