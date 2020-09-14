<script>
  export let balls;
  export let strikes;

  $: showCount = balls || strikes;
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
    border: 1px solid #6a6a6a;
    width: 5px;
    height: 5px;
    margin-right: 0.1rem;
    margin-bottom: 0.2rem;
    border-radius: 50%;
  }

  .filled {
    background-color: #acacac;
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
