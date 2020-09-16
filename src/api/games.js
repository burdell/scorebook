const gameApi = 'https://d261thy6c8l9fw.cloudfront.net'

const fetchOptions = {}

export async function getAllLists(fetch) {
  const res = await fetch(`${gameApi}/lists.json`, fetchOptions)
  const games = await res.json()
  return games
}

export async function getGame(gameId, fetch) {
  const res = await fetch(`${gameApi}/games/${gameId}.json`, fetchOptions)
  const game = await res.json()
  return game
}

export async function getList(listName, fetch) {
  const res = await fetch(`${gameApi}/lists/${listName}.json`, fetchOptions)
  const list = await res.json()
  return list
}

export async function getSeason(seasonId, fetch) {
  const res = await fetch(`${gameApi}/lists/${seasonId}.json`, fetchOptions)
  const season = await res.json()
  return season
}

export async function getSeries(seriesId, fetch) {
  const res = await fetch(`${gameApi}/series/${seriesId}.json`, fetchOptions)
  const series = await res.json()
  return series
}
