import searchMovieApiMock from "@/model/SearchMovieApiMock";
import {
  FilterBy,
  SearchMovieRequest,
  SearchOption,
  SortBy,
  SortOrder,
} from "@/model/SearchMovieRequest";
import { SearchMovieResponse } from "@/model/SearchMovieResponse";

describe("SearchMovieApiMock", () => {
  describe("searchMovies", () => {
    let movies: SearchMovieResponse;
    const request: SearchMovieRequest = {
      searchOption: SearchOption.ALL,
      searchTerm: "searchTerm",
    };
    const movieTitle1 = "An American Tail: Fievel Goes West";
    const movieTitle2 = "The Notebook";

    it("should return all movies when no filters", async () => {
      movies = await searchMovieApiMock.searchMovies(request);

      expect(movies.length).toBe(2);
      expect(movies[0].title).toBe(movieTitle1);
      expect(movies[1].title).toBe(movieTitle2);
    });

    it("should return one movie when filters", async () => {
      movies = await searchMovieApiMock.searchMovies({
        ...request,
        filters: [{ by: FilterBy.SERIE, value: true }],
      });

      expect(movies.length).toBe(1);
      expect(movies[0].title).toBe(movieTitle1);
    });

    it("should return movies sorted when sort", async () => {
      movies = await searchMovieApiMock.searchMovies({
        ...request,
        sort: { by: SortBy.TITLE, order: SortOrder.DESC },
      });

      expect(movies.length).toBe(2);
      expect(movies[0].title).toBe(movieTitle2);
      expect(movies[1].title).toBe(movieTitle1);
    });
  });
});
