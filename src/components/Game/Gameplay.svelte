<script>
  import AtBat from './AtBat.svelte'
  import ColumnHeader from '../Grid/ColumnHeader.svelte'
  import type { AtBat as AtBatType } from '../../types'

  export let gameplay: AtBatType[][]

  function getInningChunk(atBatList: AtBatType[]) {
    return atBatList.reduce<AtBatType[][]>((resultArray, item, index) => {
      const chunkIndex = Math.floor(index / 9)

      if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = [] as AtBatType[] // start a new chunk
      }

      resultArray[chunkIndex].push(item)

      return resultArray
    }, [])
  }

  $: inningList = gameplay.flatMap((inning, i) => {
    const inningDisplay = i + 1
    if (inning.length > 9) {
      const inningChunks = getInningChunk(inning).map((atBats) => ({
        inningDisplay,
        atBats,
      }))
      return inningChunks
    }

    return { inningDisplay, atBats: inning }
  })
</script>

<style>
  .gameplay {
    flex: 10;
  }

  .innings {
    display: flex;
    width: 100%;
    justify-content: space-between;
    box-sizing: border-box;
    padding-right: 1rem;
    height: calc(100vh - 120px);
  }

  .inning {
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    align-items: center;
  }
</style>

<div class="gameplay">
  <div class="innings">
    {#each inningList as inning}
      <div class="inning">
        <ColumnHeader>{inning.inningDisplay}</ColumnHeader>
        {#each inning.atBats as atBat}
          <AtBat {atBat} />
        {/each}
      </div>
    {/each}
  </div>
</div>
