<script>
  import Content from './Content.svelte'
  import ContentContainer from './ContentContainer.svelte'
</script>

<style>
  .content-page {
    padding-top: 4rem;
  }
</style>

<div class="content-page">
  <ContentContainer>
    <Content>
      <slot />
    </Content>
  </ContentContainer>
</div>
