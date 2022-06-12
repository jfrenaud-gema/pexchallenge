import searchMovieApiMock from "./SearchMovieApiMock";
import { SearchMovieRequest } from "./SearchMovieRequest";
import { GenreResponse, SearchMovieResponse } from "./SearchMovieResponse";

const searchMovieApi = {
  getAllGenres(): Promise<GenreResponse> {
    return searchMovieApiMock.getAllGenres();
  },
  searchMovies(request: SearchMovieRequest): Promise<SearchMovieResponse> {
    return searchMovieApiMock.searchMovies(request);
  },
};

export default searchMovieApi;
