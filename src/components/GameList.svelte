<script>
  import type { ListGame as ListGameType } from '../types'
  import ListGame from './ListGame.svelte'
  import Content from './Content/Content.svelte'
  import ListItem from './List/ListItem.svelte'

  export let games: ListGameType[]
  export let title: string
</script>

<Content {title}>
  {#each games as game}
    <ListItem>
      <ListGame {game} />
    </ListItem>
  {/each}
</Content>
