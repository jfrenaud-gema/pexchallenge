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

export enum SortBy {
  TITLE = "TITLE",
  GENRE = "GENRE",
  ACTOR = "ACTOR",
  SERIE = "SERIE",
  RELEASE_DATE = "RELEASE_DATE",
}

export enum SortOrder {
  ASC = "ASC",
  DESC = "DESC",
}

export interface Sort {
  by: SortBy;
  order: SortOrder;
}

export interface SearchMovieRequest {
  searchOption: SearchOption;
  searchTerm?: string;
  filters?: Filter[];
  sort?: Sort;
}
