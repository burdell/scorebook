<style>
  .column-header {
    text-align: center;
    font-weight: 600;
    border-bottom: 1px solid var(--gridColor);

    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    padding: 0.1rem 0;
  }
</style>

<div class="column-header">
  <slot />
</div>
