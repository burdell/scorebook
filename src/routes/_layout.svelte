<script context="module">
  export const preload: Function = () => {}
</script>

<script>
  import Nav from '../components/Nav.svelte'

  export let segment: string = ''
  if (segment) {
  }
</script>

<style>
  main {
    margin-top: var(--nav-offset);
    color: var(--gray1);
    padding-bottom: 0.2rem;
  }
</style>

<Nav {segment} />

<main>
  <slot />
</main>
