<style>
  .content-container {
    width: 50%;
    margin: 0 auto;
  }

  @media (max-width: 900px) {
    .content-container {
      width: 90%;
    }
  }
</style>

<div class="content-container">
  <slot />
</div>
