<script>
  import ListPage from '../components/ListPage.svelte'
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
  }

  .section-text {
    padding-left: 1rem;
  }
</style>

<svelte:head>
  <title>About Scorebook</title>
</svelte:head>

<ListPage>
  <div class="section">
    <h1>What is this?</h1>
    <div class="section-text">
      Scorekeeper is a project to programmatically generate scorecards from
      <a target="_blank" href="https://www.retrosheet.org/">Retrosheet</a>
      data. Retrosheet is a project that compiles play-by-play data for MLB
      games.
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
            retrosheet-parse (parses the raw Retrosheet files)
          </a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/burdell/scorekeeper">
            scorekeeper (interprets the parsed Retrosheet data)
          </a>
        </li>
        <li>
          <a target="_blank" href="https://github.com/burdell/scorebook">
            scorebook (what you are looking at right now)
          </a>
        </li>
      </ul>
      <div>
        retrosheet-parse is currently available on npm as a separate library if
        you have a desire to do somethign with Retrosheet using Node. Hopefully
        scorekeeper will be one soon as well. It's written so that it can be
        used for generic scorekeeping purposes (which is the original idea I had
        before I discovered the Retrosheet project)
      </div>
    </div>
  </div>
  <div class="section">
    <h1>Why are there so many Braves games?!</h1>
    <div class="section-text">I'm a Braves fan.</div>
    <div class="section-text">
      (let me know on Twitter or GitHub if there's something you want to see)
    </div>
  </div>
</ListPage>
