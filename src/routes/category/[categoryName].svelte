<script context="module">
  import { getList } from "../../api/games";
  import GameList from "../../components/GameList.svelte";

  export async function preload(page, session) {
    const { categoryName } = page.params;
    const category = await getList(categoryName, this.fetch);

    return { category };
  }
</script>

<script>
  export let category;
</script>

<style>
  .category-info {
    display: flex;
    justify-content: space-between;
    border: 1px solid hsl(217, 49%, 88%);
    background-color: hsl(217, 49%, 98%);
    border-radius: 5px;
    margin: 0.5rem 1rem;
    padding: 0.5rem 1rem;
  }
</style>

<svelte:head>
  <title>{category.categoryName}</title>
</svelte:head>

<div>
  <div class="category-info">
    <div>{category.categoryName}</div>
  </div>
  <GameList games={category.games} />
</div>
