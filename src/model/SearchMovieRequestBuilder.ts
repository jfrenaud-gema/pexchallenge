import { SearchMovieRequest, SearchOption } from "./SearchMovieRequest";

export class SearchMovieRequestBuilder {
  private request: SearchMovieRequest;

  constructor() {
    this.request = {
      searchOption: SearchOption.ALL,
    };
  }

  withSearchTerm(searchTerm: string): SearchMovieRequestBuilder {
    this.request.searchTerm = searchTerm;
    return this;
  }

  withSearchOption(searchOption: SearchOption): SearchMovieRequestBuilder {
    this.request.searchOption = searchOption;
    return this;
  }

  build(): SearchMovieRequest {
    return this.request;
  }
}
