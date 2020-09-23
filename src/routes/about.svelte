<script>
  import { intros } from 'svelte/internal'
</script>

<style>
  .wat-dis {
    width: 40%;
    margin: 0 auto;
    padding: 1rem;
  }

  .section {
    margin-bottom: 2rem;
    border: 1px solid var(--gray2);
    background-color: var(--gray9);
    padding: 1rem;
    border-radius: 5px;
  }
</style>

<svelte:head>
  <title>About Scorebook</title>
</svelte:head>
<div class="wat-dis">
  <div class="section">
    <h1>What is this?</h1>
    <div>
      Scorekeeper is a project to programmatically generate scorecards from
      <a target="_blank" href="https://www.retrosheet.org/">Retrosheet</a>
      data. Retrosheet is a project that compiles play-by-play data for MLB
      games.
    </div>
  </div>
  <div class="section">
    <h1>There are games I want to see!</h1>
    <div>
      <div>
        There are proportionately more Atlanta Braves games right now (because
        I'm a Braves fan), but if there's a game or series you want to see drop
        me a line on Twitter at @nathaniscool, or open a PR into the repository.
        It's fairly easy to generate a game or series, but compiling a bunch of
        games (like a full season can get tedious). Though if you open up a pull
        request with all the games in files, I'm more likely the accomodate.
      </div>
    </div>
  </div>
  <div class="section">
    <h1>How does it work?</h1>
    <div>
      <div>You can peek all the code that makes this hum on GitHub:</div>
      <ul>
        <li>
          <a target="_blank" href="https://github.com/burdell/retrosheet-parse">
            retrosheet-parse
          </a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/burdell/scorekeeper">
            scorekeeper
          </a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/burdell/scorebook">
            scorebook
          </a>
        </li>
      </ul>

    </div>
  </div>
</div>
