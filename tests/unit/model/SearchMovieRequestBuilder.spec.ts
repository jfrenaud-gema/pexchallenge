import {
  FilterBy,
  SearchMovieRequest,
  SearchOption,
} from "@/model/SearchMovieRequest";
import { SearchMovieRequestBuilder } from "@/model/SearchMovieRequestBuilder";

describe("SearchMovieRequestBuilder", () => {
  const searchTerm = "searchTerm";
  let builder: SearchMovieRequestBuilder;
  let request: SearchMovieRequest;

  beforeEach(() => {
    builder = new SearchMovieRequestBuilder();
  });

  describe("search term", () => {
    describe("search terms only", () => {
      it("should have search term", () => {
        builder.withSearchTerm(searchTerm);

        request = builder.build();

        expect(request.searchTerm).toBe(searchTerm);
      });

      it("should have default search option", () => {
        builder.withSearchTerm(searchTerm);

        request = builder.build();

        expect(request.searchOption).toBe("ALL");
      });

      it("should not have filters", () => {
        builder.withSearchTerm(searchTerm);

        request = builder.build();

        expect(request.filters).toBeUndefined();
      });
    });

    describe("no search term", () => {
      it("should have no search term", () => {
        request = builder.build();

        expect(request.searchTerm).toBeUndefined();
      });

      it("should have default search option", () => {
        request = builder.build();

        expect(request.searchOption).toBe("ALL");
      });

      it("should have no filters", () => {
        request = builder.build();

        expect(request.filters).toBeUndefined();
      });
    });

    describe("search actors only", () => {
      it("should have the actors search option", () => {
        builder.withSearchOption(SearchOption.ACTORS);

        request = builder.build();

        expect(request.searchOption).toBe("ACTORS");
      });
    });
  });

  describe("filters", () => {
    it("should filter by genre", () => {
      builder.withFilter({
        by: FilterBy.GENRE,
        value: "Comedy",
      });

      request = builder.build();

      expect(request.filters?.length).toBe(1);
      expect(request.filters?.[0]).toEqual({
        by: "GENRE",
        value: "Comedy",
      });
    });

    it("should filter by serie", () => {
      builder.withFilter({
        by: FilterBy.SERIE,
        value: true,
      });

      request = builder.build();

      expect(request.filters?.length).toBe(1);
      expect(request.filters?.[0]).toEqual({
        by: "SERIE",
        value: true,
      });
    });

    it("should filter by genre and serie", () => {
      builder
        .withFilter({
          by: FilterBy.GENRE,
          value: "Comedy",
        })
        .withFilter({
          by: FilterBy.SERIE,
          value: true,
        });

      request = builder.build();

      expect(request.filters?.length).toBe(2);
      expect(request.filters?.[0]).toEqual({
        by: "GENRE",
        value: "Comedy",
      });
      expect(request.filters?.[1]).toEqual({
        by: "SERIE",
        value: true,
      });
    });

    it("should add multiple genres", () => {
      builder
        .withFilter({
          by: FilterBy.GENRE,
          value: "Comedy",
        })
        .withFilter({
          by: FilterBy.GENRE,
          value: "Western",
        });

      request = builder.build();

      expect(request.filters?.length).toBe(2);
      expect(request.filters?.[0]).toEqual({
        by: "GENRE",
        value: "Comedy",
      });
      expect(request.filters?.[1]).toEqual({
        by: "GENRE",
        value: "Western",
      });
    });

    it("should not add same genre twice", () => {
      builder
        .withFilter({
          by: FilterBy.GENRE,
          value: "Comedy",
        })
        .withFilter({
          by: FilterBy.GENRE,
          value: "Comedy",
        });

      request = builder.build();

      expect(request.filters?.length).toBe(1);
      expect(request.filters?.[0]).toEqual({
        by: "GENRE",
        value: "Comedy",
      });
    });

    it("should not add same serie twice", () => {
      builder
        .withFilter({
          by: FilterBy.SERIE,
          value: true,
        })
        .withFilter({
          by: FilterBy.SERIE,
          value: true,
        });

      request = builder.build();

      expect(request.filters?.length).toBe(1);
      expect(request.filters?.[0]).toEqual({
        by: "SERIE",
        value: true,
      });
    });

    it("should not add serie twice", () => {
      builder
        .withFilter({
          by: FilterBy.SERIE,
          value: false,
        })
        .withFilter({
          by: FilterBy.SERIE,
          value: true,
        });

      request = builder.build();

      expect(request.filters?.length).toBe(1);
      expect(request.filters?.[0]).toEqual({
        by: "SERIE",
        value: false,
      });
    });
  });
});
