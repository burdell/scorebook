<script>
  import ContentContainer from '../Content/ContentContainer.svelte'
</script>

<style>
  .list-page {
    padding-top: 4rem;
  }
</style>

<div class="list-page">
  <ContentContainer>
    <slot />
  </ContentContainer>
</div>
