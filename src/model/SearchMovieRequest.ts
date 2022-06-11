export enum SearchOption {
  ALL = "ALL",
  ACTORS = "ACTORS",
}

export interface SearchTerm {
  option: SearchOption;
}

export interface SearchMovieRequest {
  searchOption: SearchOption;
  searchTerm?: string;
}
