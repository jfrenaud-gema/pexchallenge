export enum SearchDataOption {
  ALL,
  ACTORS,
}

export type GenreData = string;

export type SerieData = boolean;

export interface FilterData {
  genres?: GenreData[];
  serie?: SerieData;
}

export enum SortDataBy {
  TITLE,
  RELEASE_DATE,
}

export interface SortData {
  by: SortDataBy;
  ascending: boolean;
}

export interface SearchData {
  searchTerm: string;
  option: SearchDataOption;
  sort: SortData;
  filter?: FilterData;
}

export interface SearchBarAction {
  onSearch: (search: SearchData) => void;
}

export interface SearchBarProps extends SearchBarAction {
  genres: GenreData[];
}
