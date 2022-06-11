import { SearchDataOption, SortDataBy } from "@/components/SearchBar";
import searchMovieMapper from "@/controller/SearchMovieMapper";
import { FilterBy, SearchOption, SortBy, SortOrder } from "@/model";

describe("SearchMovieMapper", () => {
  describe("toSearchOption", () => {
    it("should convert actors", () => {
      const searchOption = searchMovieMapper.toSearchOption(
        SearchDataOption.ACTORS
      );

      expect(searchOption).toBe(SearchOption.ACTORS);
    });

    it("should convert all", () => {
      const searchOption = searchMovieMapper.toSearchOption(
        SearchDataOption.ALL
      );

      expect(searchOption).toBe(SearchOption.ALL);
    });
  });

  describe("toSort", () => {
    it("should convert title order asc ", () => {
      const sort = searchMovieMapper.toSort({
        by: SortDataBy.TITLE,
        ascending: true,
      });

      expect(sort.by).toBe(SortBy.TITLE);
      expect(sort.order).toBe(SortOrder.ASC);
    });

    it("should convert title order desc ", () => {
      const sort = searchMovieMapper.toSort({
        by: SortDataBy.TITLE,
        ascending: false,
      });

      expect(sort.by).toBe(SortBy.TITLE);
      expect(sort.order).toBe(SortOrder.DESC);
    });

    it("should convert release date order asc ", () => {
      const sort = searchMovieMapper.toSort({
        by: SortDataBy.RELEASE_DATE,
        ascending: true,
      });

      expect(sort.by).toBe(SortBy.RELEASE_DATE);
      expect(sort.order).toBe(SortOrder.ASC);
    });
  });

  describe("toFilter", () => {
    it("should convert to no filters ", () => {
      const filters = searchMovieMapper.toFilters({
        genres: [],
      });

      expect(filters.length).toBe(0);
    });

    it("should convert genre", () => {
      const filters = searchMovieMapper.toFilters({
        genres: ["Comedy"],
      });

      expect(filters.length).toBe(1);
      expect(filters[0].by).toBe(FilterBy.GENRE);
      expect(filters[0].value).toBe("Comedy");
    });

    it("should convert genres", () => {
      const filters = searchMovieMapper.toFilters({
        genres: ["Comedy", "Western"],
      });

      expect(filters.length).toBe(2);
      expect(filters[0].by).toBe(FilterBy.GENRE);
      expect(filters[0].value).toBe("Comedy");
      expect(filters[1].by).toBe(FilterBy.GENRE);
      expect(filters[1].value).toBe("Western");
    });

    it("should convert serie true", () => {
      const filters = searchMovieMapper.toFilters({
        serie: {
          value: true,
        },
      });

      expect(filters.length).toBe(1);
      expect(filters[0].by).toBe(FilterBy.SERIE);
      expect(filters[0].value).toBe(true);
    });

    it("should convert serie false", () => {
      const filters = searchMovieMapper.toFilters({
        serie: {
          value: false,
        },
      });

      expect(filters.length).toBe(1);
      expect(filters[0].by).toBe(FilterBy.SERIE);
      expect(filters[0].value).toBe(false);
    });

    it("should convert genres and serie", () => {
      const filters = searchMovieMapper.toFilters({
        genres: ["Comedy", "Western"],
        serie: {
          value: false,
        },
      });

      expect(filters.length).toBe(3);
      expect(filters[0].by).toBe(FilterBy.GENRE);
      expect(filters[0].value).toBe("Comedy");
      expect(filters[1].by).toBe(FilterBy.GENRE);
      expect(filters[1].value).toBe("Western");
      expect(filters[2].by).toBe(FilterBy.SERIE);
      expect(filters[2].value).toBe(false);
    });
  });
});
