<script>
  export let segment: string
</script>

<style>
  nav {
    border-bottom: 1px solid rgba(255, 62, 0, 0.1);
    font-weight: 300;
    padding: 0 1em;
    display: flex;
    align-items: center;
    color: var(--primary5);
    background-color: var(--white9);
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
    font-size: 2rem;
    padding: 0.5rem 0;
    font-weight: 300;
    font-family: 'Oleo Script', cursive;
  }

  .links {
    margin-left: 1.5rem;
    font-family: 'Lato', serif;
  }

  .links a {
    padding-top: 0.5rem;
    font-weight: 400;
    font-size: 1rem;
  }

  .links a:hover {
    text-decoration: underline;
    color: var(--seconary5);
  }
</style>

<nav>
  <a aria-current={segment === undefined ? 'page' : undefined} href=".">
    <div class="site-title">scorekeeper</div>
  </a>
  <div class="links">
    <a href="/about">What is this?</a>
  </div>
</nav>
