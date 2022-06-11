import searchMovieApiMock from "./SearchMovieApiMock";
import { SearchMovieRequest } from "./SearchMovieRequest";
import { SearchMovieResponse } from "./SearchMovieResponse";

const searchMovieApi = {
  searchMovies(request: SearchMovieRequest): Promise<SearchMovieResponse> {
    return searchMovieApiMock.searchMovies(request);
  },
};

export default searchMovieApi;
