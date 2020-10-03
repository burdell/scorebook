<script>
  export let balls: number
  export let strikes: number

  $: showCount = balls || strikes
</script>

<style>
  .count {
    font-size: 0.8rem;
    font-style: italic;
    font-weight: 300;
    position: absolute;
    bottom: 2px;
    right: 2px;
  }

  .count-item {
    border: 1px solid var(--gray3);
    width: 0.3rem;
    height: 0.3rem;
    margin-right: 0.1rem;
    margin-bottom: 0.2rem;
    border-radius: 50%;
  }

  .filled {
    background-color: var(--gray4);
  }

  .count-display {
    display: flex;
  }
</style>

<div class="count">
  {#if showCount}
    <div class="count-display">
      <div class="count-item {balls >= 1 ? 'filled' : ''}" />
      <div class="count-item {balls >= 2 ? 'filled' : ''}" />
      <div class="count-item {balls >= 3 ? 'filled' : ''}" />
    </div>
    <div class="count-display">
      <div class="count-item {strikes >= 1 ? 'filled' : ''}" />
      <div class="count-item {strikes >= 2 ? 'filled' : ''}" />
    </div>
  {/if}
</div>
