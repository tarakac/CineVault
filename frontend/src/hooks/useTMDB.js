import useSWR from "swr";

const fetcher = (url) => fetch(url).then((r) => r.json());

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

// Search movies by text query
export function useTMDBSearch(query) {
  const url =
    query && query.length > 0
      ? `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
          query
        )}`
      : null;

  const { data, error, isLoading } = useSWR(url, fetcher);

  return {
    results: data?.results || [],
    error,
    isLoading,
  };
}

// Fetch full movie details
export function useTMDBMovie(id) {
  const url = id
    ? `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
    : null;

  const { data, error, isLoading } = useSWR(url, fetcher);

  return { movie: data, error, isLoading };
}
