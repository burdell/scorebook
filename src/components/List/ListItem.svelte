<style>
  .list-item {
    font-size: 1rem;
    transition: 0.2s ease-in-out all;
    padding: 1rem 2rem;
    display: block;
    background-color: var(--white9);
  }

  .list-item:hover {
    background-color: var(--gray8);
  }

  .list-item:first-child {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .list-item:last-child {
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
  }
</style>

<div class="list-item">
  <slot />
</div>
