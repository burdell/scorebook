<script>
  export let atBat;
</script>

<style>
  .at-bat {
    padding: 1rem;
    border: 1px solid black;
  }
</style>

<div class="at-bat">{atBat && atBat.result ? atBat.result.display : ''}</div>
