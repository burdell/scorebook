const gameApi = "http://localhost:4000";

export async function getGames(fetch) {
  const res = await fetch(`${gameApi}/games`);
  const games = await res.json();
  return games;
}

export async function getGame(gameId, fetch) {
  const res = await fetch(`${gameApi}/games/${gameId}`);
  const game = await res.json();
  return game;
}
