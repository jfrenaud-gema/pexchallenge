export interface Genre {
  id: number;
  title: string;
}

export interface Actor {
  id: number;
  name: string;
}

export interface Movie {
  id: number;
  title: string;
  genre: Genre[];
  actors: Actor[];
  is_series: boolean;
  release_date: string;
}

export type SearchMovieResponse = Movie[];
