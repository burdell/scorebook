<script>
  import GameList from './GameList.svelte'
  import type { ListGame } from '../types'

  export let display: string
  export let games: ListGame[]
</script>

<GameList title={display} {games} />
