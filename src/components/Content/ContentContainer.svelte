<style>
  .content-container {
    width: 50%;
    margin: 0 auto;
    padding-top: 2.5rem;
  }

  @media (max-width: 1000px) {
    .content-container {
      width: 90%;
    }
  }
</style>

<div class="content-container">
  <slot />
</div>
