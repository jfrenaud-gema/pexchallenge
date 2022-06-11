export enum SearchOption {
  ALL = "ALL",
  ACTORS = "ACTORS",
}

export interface SearchTerm {
  option: SearchOption;
}

export enum FilterBy {
  GENRE = "GENRE",
  SERIE = "SERIE",
}

export interface Filter {
  by: FilterBy;
  value: string | boolean;
}
export interface SearchMovieRequest {
  searchOption: SearchOption;
  searchTerm?: string;
  filters?: Filter[];
}
