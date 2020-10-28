<script>
  import ListTitle from './ListTitle.svelte'

  export let title: string | undefined
</script>

<style>
  .content {
    background-color: var(--white9);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    box-shadow: 2px 2px 3px hsl(215, 55%, 15%), -2px 2px 3px hsl(215, 55%, 15%);
  }

  .no-title {
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }

  .content-wrapper {
    margin-bottom: 1rem;
  }
</style>

<div class="content-wrapper">
  {#if title}
    <ListTitle>{title}</ListTitle>
  {/if}
  <div class="content {title ? '' : 'no-title'}">
    <slot />
  </div>
</div>
