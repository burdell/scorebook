import type {
  List,
  ListGame,
  Category,
  Season,
  Game,
  SeriesGames,
} from '../types'

type ApiConfig = {
  fetch: SapperFetch
  gameApi: string
}

export async function getAllLists({ fetch, gameApi }: ApiConfig) {
  const res = await fetch(`${gameApi}/lists.json`)
  const games = await res.json()
  return games as List[]
}

export async function getCategories(
  listName: string,
  { fetch, gameApi }: ApiConfig,
) {
  const res = await fetch(`${gameApi}/categories/${listName}.json`)
  const list = await res.json()
  return list as Category
}

export async function getGame(gameId: string, { fetch, gameApi }: ApiConfig) {
  const res = await fetch(`${gameApi}/games/${gameId}.json`)
  const game = await res.json()
  return game as Game
}

export async function getSeriesList(
  seasonId: string,
  { fetch, gameApi }: ApiConfig,
) {
  const res = await fetch(`${gameApi}/series-lists/${seasonId}.json`)
  const season = await res.json()
  return season as Season
}

export async function getSeriesGroup(
  seriesGroupId: string,
  { fetch, gameApi }: ApiConfig,
) {
  const res = await fetch(`${gameApi}/series-groups/${seriesGroupId}.json`)
  const seriesGames = await res.json()
  return seriesGames as SeriesGames[]
}

export async function getSeries(
  seriesId: string,
  { fetch, gameApi }: ApiConfig,
) {
  const res = await fetch(`${gameApi}/series/${seriesId}.json`)
  const series = await res.json()
  return series as SeriesGames
}
