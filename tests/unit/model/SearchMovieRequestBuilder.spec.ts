import {
  FilterBy,
  SearchMovieRequest,
  SearchOption,
  SortBy,
  SortOrder,
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
      beforeEach(() => {
        builder.withSearchTerm(searchTerm);
      });

      it("should have search term", () => {
        request = builder.build();

        expect(request.searchTerm).toBe(searchTerm);
      });

      it("should have default search option", () => {
        request = builder.build();

        expect(request.searchOption).toBe("ALL");
      });

      it("should not have filters", () => {
        request = builder.build();

        expect(request.filters).toBeUndefined();
      });

      it("should not have sort", () => {
        request = builder.build();

        expect(request.sort).toBeUndefined();
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

      it("should not have sort", () => {
        request = builder.build();

        expect(request.sort).toBeUndefined();
      });
    });

    describe("search actors only", () => {
      beforeEach(() => {
        builder.withSearchOption(SearchOption.ACTORS);
      });

      it("should have the actors search option", () => {
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

    it("should not add different serie", () => {
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

  describe("sort", () => {
    it("should sort ascending", () => {
      builder.withSort({
        by: SortBy.TITLE,
        order: SortOrder.ASC,
      });

      request = builder.build();

      expect(request.sort?.by).toBe("TITLE");
      expect(request.sort?.order).toBe("ASC");
    });

    it("should sort descending", () => {
      builder.withSort({
        by: SortBy.TITLE,
        order: SortOrder.DESC,
      });

      request = builder.build();

      expect(request.sort?.by).toBe("TITLE");
      expect(request.sort?.order).toBe("DESC");
    });
  });

  describe("build", () => {
    it("should construct a full request", () => {
      builder
        .withSearchTerm(searchTerm)
        .withSearchOption(SearchOption.ACTORS)
        .withFilter({ by: FilterBy.GENRE, value: "Comedy" })
        .withFilter({ by: FilterBy.SERIE, value: false })
        .withSort({ by: SortBy.RELEASE_DATE, order: SortOrder.DESC });

      request = builder.build();

      expect(request.searchTerm).toBe(searchTerm);
      expect(request.searchOption).toBe("ACTORS");
      expect(request.filters?.length).toBe(2);
      expect(request.filters?.[0].by).toBe("GENRE");
      expect(request.filters?.[0].value).toBe("Comedy");
      expect(request.filters?.[1].by).toBe("SERIE");
      expect(request.filters?.[1].value).toBe(false);
      expect(request.sort?.by).toBe("RELEASE_DATE");
      expect(request.sort?.order).toBe("DESC");
    });
  });
});
