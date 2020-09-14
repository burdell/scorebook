const gameApi = 'http://localhost:4000';

export async function getAllLists(fetch) {
  const res = await fetch(`${gameApi}/lists`);
  const games = await res.json();
  return games;
}

export async function getGame(gameId, fetch) {
  const res = await fetch(`${gameApi}/games/${gameId}`);
  const game = await res.json();
  return game;
}

export async function getList(listName, fetch) {
  const res = await fetch(`${gameApi}/lists/${listName}`);
  const list = await res.json();
  return list;
}
