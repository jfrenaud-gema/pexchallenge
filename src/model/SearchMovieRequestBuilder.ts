import { Filter, SearchMovieRequest, SearchOption } from "./SearchMovieRequest";

type CompareFilterFunction = (filterA: Filter, filterB: Filter) => boolean;

const compareFilterByAndValue = (filterA: Filter, filterB: Filter): boolean => {
  return filterA.by === filterB.by && filterA.value === filterB.value;
};

const compareFilterBy = (filterA: Filter, filterB: Filter): boolean => {
  return filterA.by === filterB.by;
};

const getCompare = (filter: Filter): CompareFilterFunction => {
  if (typeof filter.value === "boolean") {
    return compareFilterBy;
  }

  return compareFilterByAndValue;
};

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

  withFilter(filter: Filter): SearchMovieRequestBuilder {
    if (!this.request.filters) {
      this.request.filters = [];
    }

    const compare: CompareFilterFunction = getCompare(filter);

    if (!this.request.filters.find((f) => compare(filter, f))) {
      this.request.filters.push(filter);
    }

    return this;
  }

  build(): SearchMovieRequest {
    return this.request;
  }
}
