import {
  FilterData,
  GenreData,
  SearchDataOption,
  SortData,
  SortDataBy,
} from "../components/SearchBar/SearchBar.types";
import {
  Filter,
  FilterBy,
  GenreResponse,
  SearchOption,
  Sort,
  SortBy,
  SortOrder,
} from "../model";

const searchMovieMapper = {
  toGenreData: (genres: GenreResponse): GenreData[] => {
    return genres.map((genre) => genre.title);
  },

  toSearchOption: (searchDataOption: SearchDataOption): SearchOption => {
    if (searchDataOption === SearchDataOption.ACTORS) {
      return SearchOption.ACTORS;
    }

    return SearchOption.ALL;
  },

  toSort: (sortData: SortData): Sort => {
    return {
      by: sortData.by === SortDataBy.TITLE ? SortBy.TITLE : SortBy.RELEASE_DATE,
      order: sortData.ascending ? SortOrder.ASC : SortOrder.DESC,
    };
  },

  toFilters: (filterData: FilterData): Filter[] => {
    let filters: Filter[] = [];

    if (filterData.genres) {
      filters = filterData.genres.map((genre) => ({
        by: FilterBy.GENRE,
        value: genre,
      }));
    }

    if (filterData.serie) {
      filters.push({
        by: FilterBy.SERIE,
        value: filterData.serie.value,
      });
    }

    return filters;
  },
};

export default searchMovieMapper;
