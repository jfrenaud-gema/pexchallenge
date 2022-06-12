import {
  SearchDataOption,
  SortDataBy,
} from "@/components/SearchBar/SearchBar.types";
import searchMovieMapper from "@/controller/SearchMovieMapper";
import { FilterBy, Movie, SearchOption, SortBy, SortOrder } from "@/model";

describe("SearchMovieMapper", () => {
  describe("toGenreDate", () => {
    it("should select the title", () => {
      const genreData = searchMovieMapper.toGenreData([
        { id: 1, title: "Comedy" },
        { id: 2, title: "Western" },
      ]);

      expect(genreData.length).toBe(2);
      expect(genreData[0]).toBe("Comedy");
      expect(genreData[1]).toBe("Western");
    });
  });

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
        serie: true,
      });

      expect(filters.length).toBe(1);
      expect(filters[0].by).toBe(FilterBy.SERIE);
      expect(filters[0].value).toBe(true);
    });

    it("should convert serie false", () => {
      const filters = searchMovieMapper.toFilters({
        serie: false,
      });

      expect(filters.length).toBe(1);
      expect(filters[0].by).toBe(FilterBy.SERIE);
      expect(filters[0].value).toBe(false);
    });

    it("should convert genres and serie", () => {
      const filters = searchMovieMapper.toFilters({
        genres: ["Comedy", "Western"],
        serie: false,
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

  describe("toMovieMapper", () => {
    it("should ", () => {
      const movies: Movie[] = [
        {
          id: 163979287265942016,
          title: "An American Tail: Fievel Goes West",
          genre: [
            {
              id: 3,
              title: "Comedy",
            },
            {
              id: 8,
              title: "Western",
            },
          ],
          actors: [
            {
              id: 163978496991957504,
              name: "Fievel Mousekewitz",
            },
            {
              id: 163978647315813376,
              name: "Tanya MouseKewitz",
            },
          ],
          is_series: true,
          release_date: "1991-11-17T00:00:00.000000Z",
        },
        {
          id: 163982121944357888,
          title: "The Notebook",
          genre: [
            {
              id: 2,
              title: "Drama",
            },
            {
              id: 6,
              title: "Romance",
            },
          ],
          actors: [
            {
              id: 163982182073900544,
              name: "Ryan Gosling",
            },
            {
              id: 163982199253770240,
              name: "Rachel McAdams",
            },
          ],
          is_series: false,
          release_date: "2004-06-25T00:00:00.000000Z",
        },
      ];

      const moviesCardData = searchMovieMapper.toMovieCards(movies);

      expect(moviesCardData.length).toBe(2);

      const movieCard1 = moviesCardData[0];
      expect(movieCard1.title).toBe("An American Tail: Fievel Goes West");
      expect(movieCard1.genres.length).toBe(2);
      expect(movieCard1.genres[0]).toBe("Comedy");
      expect(movieCard1.genres[1]).toBe("Western");
      expect(movieCard1.actors.length).toBe(2);
      expect(movieCard1.actors[0]).toBe("Fievel Mousekewitz");
      expect(movieCard1.actors[1]).toBe("Tanya MouseKewitz");
      expect(movieCard1.serie).toBe(true);
      expect(movieCard1.releaseDate).toBe("16/11/1991");

      const movieCard2 = moviesCardData[1];
      expect(movieCard2.title).toBe("The Notebook");
      expect(movieCard2.genres.length).toBe(2);
      expect(movieCard2.genres[0]).toBe("Drama");
      expect(movieCard2.genres[1]).toBe("Romance");
      expect(movieCard2.actors.length).toBe(2);
      expect(movieCard2.actors[0]).toBe("Ryan Gosling");
      expect(movieCard2.actors[1]).toBe("Rachel McAdams");
      expect(movieCard2.serie).toBe(false);
      expect(movieCard2.releaseDate).toBe("24/06/2004");
    });
  });
});
