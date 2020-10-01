<style>
  .content-container {
    width: 50%;
    margin: 0 auto;
  }

  @media (min-width: 768px) and (max-width: 1024px) {
    .content-container {
      width: 90%;
    }
  }
</style>

<div class="content-container">
  <slot />
</div>
