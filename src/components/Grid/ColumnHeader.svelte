<style>
  .column-header {
    text-align: center;
    font-weight: 600;
    border-bottom: 1px solid var(--gridColor);
    color: var(--gray2);
    width: 100%;
    display: flex;
    justify-content: center;
    position: relative;
    padding: 0.1rem 0;
    font-size: 0.9rem;
  }
</style>

<div class="column-header">
  <slot />
</div>
