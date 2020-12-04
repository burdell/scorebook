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

  .section-text {
    padding-left: 1rem;
    font-size: 1.1rem;
  }

  h1 {
    font-weight: 600;
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
        baseball scorecards
      </a>
      from
      <a target="_blank" href="https://www.retrosheet.org/">Retrosheet</a>
      data.
    </div>
  </div>
  <div class="section">
    <h1>How does it work?</h1>
    <div class="section-text">
      <div>All the code for this can be found in these 3 repos:</div>
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
          (what you're looking at)
        </li>
      </ul>
    </div>
  </div>
  <div class="section">
    <h1>Why are there so many Braves games?</h1>
    <div class="section-text">I'm a Braves fan.</div>
  </div>
</ContentPage>
