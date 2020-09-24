<style>
  .list-page {
    display: flex;
    align-items: center;
  }

  .list-content {
    width: 50%;
    background-color: var(--white9);
    margin: 3rem auto;
    border-radius: 10px;
    box-shadow: 0px 0px 3px 0px var(--primary9);
  }
</style>

<div class="list-page">
  <div class="list-content">
    <slot />
  </div>
</div>
