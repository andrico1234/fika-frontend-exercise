import {useQuery} from 'react-query';
import {Movie, Genre} from '../models';

const moviesUrl =
  'https://api.themoviedb.org/3/movie/now_playing?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US&page=1';

const genresUrl =
  'https://api.themoviedb.org/3/genre/movie/list?api_key=d432b933ecc6d5642d8d2befbc40c7ac&language=en-US';

interface MovieResult {
  results: Movie[];
}

interface GenreResult {
  genres: Genre[];
}

export function useGetMovies() {
  const movies = useQuery<MovieResult>('movies', () =>
    fetch(moviesUrl).then((res) => res.json()),
  );

  const genres = useQuery<GenreResult>('genres', () =>
    fetch(genresUrl).then((res) => res.json()),
  );

  const isLoading = movies.isLoading || genres.isLoading;
  const isError = movies.isError || genres.isError;
  const error = {
    movies: movies.error,
    genres: genres.error,
  };

  const results = {
    movies: movies.data?.results ?? [],
    genres: genres.data?.genres ?? [],
  };

  const data = combineMoviesWithGenres(results.movies, results.genres);

  return {
    isLoading,
    isError,
    error,
    data,
  };
}

function combineMoviesWithGenres(movies: Movie[], genres: Genre[]) {
  if (!movies.length || !genres.length) {
    return [];
  }

  const genresObj = genres.reduce((prev, curr) => {
    return {
      ...prev,
      [curr.id]: curr.name,
    };
  }, {} as Record<string, string>);

  return movies.map((movie) => ({
    ...movie,
    genres: movie.genre_ids.map((id) => genresObj[id]),
  }));
}
