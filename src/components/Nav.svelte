<script>
  export let segment: string
</script>

<style>
  nav {
    border-bottom: 1px solid var(--gray7);
    font-weight: 300;
    padding: 0 1em;
    display: flex;
    align-items: center;
    color: var(--primary5);
    background-color: var(--white9);
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 9000;
    height: var(--nav-offset);
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
    font-family: 'Arvo', serif;
  }

  .links {
    margin-left: 1.5rem;
  }

  .links a {
    padding-top: 0.5rem;
    font-weight: 400;
    color: var(--primary3);
    font-size: 1rem;
    transition: 0.2s all ease-in-out;
  }

  .links a:hover {
    color: var(--primary5);
  }
</style>

<nav>
  <a aria-current={segment === undefined ? 'page' : undefined} href=".">
    <div class="site-title">scorebook</div>
  </a>
  <div class="links">
    <a href="/about">What is this?</a>
  </div>
</nav>
