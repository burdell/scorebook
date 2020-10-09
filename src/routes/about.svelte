<script>
  import ContentPage from '../components/Content/ContentPage.svelte'
</script>

<style>
  a {
    color: var(--secondary3);
  }
  .section {
    padding: 1rem;
    border-radius: 5px;
  }

  .section h1 {
    font-weight: 300;
    font-size: 1.1rem;
  }

  .section-text {
    padding-left: 1rem;
    font-size: 0.8rem;
  }

  h1 {
    font-size: 1.2rem;
  }
</style>

<svelte:head>
  <title>About Scorebook</title>
</svelte:head>

<ContentPage>
  <div class="section">
    <h1>What is this?</h1>
    <div class="section-text">
      Scorebook is a project to programmatically generate
      <a
        target="_blank"
        href="https://en.wikipedia.org/wiki/Baseball_scorekeeping">
        scorecards
      </a>
      from
      <a target="_blank" href="https://www.retrosheet.org/">Retrosheet</a>
      data.
    </div>
  </div>
  <div class="section">
    <h1>I found something wrong!</h1>
    <div class="section-text">
      <a target="_blank" href="https://github.com/burdell/scorekeeper/issues">
        Open a GitHub issue
      </a>
      or drop me a line on
      <a target="_blank" href="https://www.twitter.com/nathaniscool">Twitter</a>
      to let me know! I can only tell when events aren't handled at all, or if
      there's an error when handling an event.
    </div>
    <div />
    <div class="section-text">

      <a target="_blank" href="https://www.baseball-reference.com/">
        Baseball Reference
      </a>
      has play-by-plays of most games that you can check to see how a specific
      scenario actually went down.
    </div>
  </div>
  <div class="section">
    <h1>How does it work?</h1>
    <div class="section-text">
      <div>You can peek all the code that makes this hum on GitHub:</div>
      <ul>
        <li>
          <a target="_blank" href="https://github.com/burdell/retrosheet-parse">
            retrosheet-parse
          </a>
          (parses the raw Retrosheet files)
        </li>
        <li>
          <a target="_blank" href="https://github.com/burdell/scorekeeper">
            scorekeeper
          </a>
          (interprets the parsed Retrosheet data)
        </li>
        <li>
          <a target="_blank" href="https://github.com/burdell/scorebook">
            scorebook
          </a>
          (what you are looking at right now)
        </li>
      </ul>
    </div>
  </div>
  <div class="section">
    <h1>Why are there so many Braves games?</h1>
    <div class="section-text">I'm a Braves fan.</div>
  </div>
</ContentPage>
