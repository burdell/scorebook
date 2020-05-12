<script>
  export let segment;
</script>

<style>
  nav {
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
    font-weight: 300;
    padding: 0 1em;
    display: flex;
    align-items: center;
  }

  [aria-current] {
    position: relative;
    display: inline-block;
  }

  a {
    text-decoration: none;
    display: block;
  }

  .site-title {
    font-size: 1.2rem;
    padding: 0.5rem 0;
    font-weight: 300;
  }
</style>

<nav>
  <a aria-current={segment === undefined ? 'page' : undefined} href=".">
    <div class="site-title">scorekeeper</div>
  </a>
</nav>
