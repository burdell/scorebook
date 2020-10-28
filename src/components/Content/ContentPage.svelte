<script>
  import Content from './Content.svelte'
  import ContentContainer from './ContentContainer.svelte'
</script>

<style>
  .content-page {
    padding-top: 1rem;
  }
</style>

<div class="content-page">
  <ContentContainer>
    <Content title="">
      <slot />
    </Content>
  </ContentContainer>
</div>
