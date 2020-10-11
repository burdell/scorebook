<script>
  import ListTitle from './List/ListTitle.svelte'
  import GameList from './GameList.svelte'
  import type { ListGame } from '../types'

  export let display: string
  export let games: ListGame[]
</script>

<ListTitle>
  <div>{display}</div>
</ListTitle>
<GameList {games} />
