<script>
  import ListTitle from './List/ListTitle.svelte'
  import GameList from './GameList.svelte'
  import { getMonthDayRange } from '../utils/date'
  import type { SeriesInfo, ListGame } from '../types'

  export let display: string
  export let info: SeriesInfo
  export let games: ListGame[]
</script>

<ListTitle>
  <div>{display}</div>
  <div>{getMonthDayRange(info, true)}</div>
</ListTitle>
<GameList {games} />
