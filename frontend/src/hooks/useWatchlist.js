import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());
const API_BASE = import.meta.env.VITE_BACKEND_URL;

export function useWatchlist(uid) {
  const { data, error, mutate } = useSWR(
    uid ? `${API_BASE}/api/watchlist/${uid}` : null,
    fetcher
  );

  return {
    watchlist: data || [],
    isLoading: !data && !error,
    error,
    mutate,
  };
}

// ADD movie to watchlist
export async function addToWatchlist({ uid, movie }) {
  const res = await fetch(`${API_BASE}/api/watchlist`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      uid,
      movieId: movie.id,
      title: movie.title,
      posterPath: movie.poster_path,
    }),
  });

  return res.json();
}

// REMOVE movie
export async function removeFromWatchlist(uid, movieId) {
  const res = await fetch(
    `${API_BASE}/api/watchlist/${uid}/${movieId}`,
    { method: "DELETE" }
  );

  return res.json();
}
