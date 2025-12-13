import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export const useMovies = () => {
  const { data, error, isLoading, mutate } = useSWR(
    "http://localhost:5000/api/movies",
    fetcher
  );

  return { movies: data, error, isLoading, mutate };
};
