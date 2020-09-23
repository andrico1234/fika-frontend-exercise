export interface Movie {
  genre_ids: string[];
  id: number;
  title: string;
  overview: string;
  vote_average: number;
}

export interface EnrichedMovie extends Movie {
  genres: string[];
}

export interface Genre {
  id: number;
  name: string;
}
