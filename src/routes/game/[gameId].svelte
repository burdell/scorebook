<script context="module">
  export async function preload(page, session) {
    const { gameId } = page.params;

    console.log("fucl");
    const res = await this.fetch(`http://localhost:4000/game/1`);
    const game = await res.json();

    return { game };
  }
</script>

<svelte:head>
  <title>About</title>
</svelte:head>

<h1>About this site</h1>

<p>This is the 'about' page. There's not much here.</p>
