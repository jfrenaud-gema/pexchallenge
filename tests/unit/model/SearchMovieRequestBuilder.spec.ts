import { SearchOption } from "@/model/SearchMovieRequest";
import { SearchMovieRequestBuilder } from "@/model/SearchMovieRequestBuilder";

describe("SearchMovieRequestBuilder", () => {
  const searchTerm = "searchTerm";

  describe("with searchTerm", () => {
    it("should have search term and default search option", () => {
      const builder = new SearchMovieRequestBuilder();
      builder.withSearchTerm(searchTerm);

      const request = builder.build();

      expect(request.searchTerm).toBe(searchTerm);
      expect(request.searchOption).toBe("ALL");
    });
  });

  describe("without searchTerm", () => {
    it("should have default search option and no search term", () => {
      const builder = new SearchMovieRequestBuilder();

      const request = builder.build();

      expect(request.searchTerm).toBeUndefined();
      expect(request.searchOption).toBe("ALL");
    });
  });

  describe("with searchOption", () => {
    it("should have the search option", () => {
      const builder = new SearchMovieRequestBuilder();
      builder.withSearchOption(SearchOption.ACTORS);

      const request = builder.build();

      expect(request.searchOption).toBe("ACTORS");
    });
  });
});
