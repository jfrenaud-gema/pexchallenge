<template>
  <div class="container mx-auto flex flex-col gap-4 py-8">
    <SearchBar :genres="genres" @on-search="onSearch" />
    <MovieCardRow :movies="movies" />
  </div>
</template>

<script lang="ts">
import { SearchMovieRequest } from "../../model";
import { defineComponent } from "vue";
import SearchBar from "../../components/SearchBar/SearchBar.vue";
import {
  GenreData,
  SearchData,
} from "../../components/SearchBar/SearchBar.types";
import searchMovieMapper from "../SearchMovieMapper";
import searchMovieApi from "../../model/SearchMovieApi";
import { MovieCardData } from "../../components/MovieCard/MovieCard.types";
import MovieCardRow from "../../components/MovieCardRow/MovieCardRow.vue";

export default defineComponent({
  name: "PexSearchMovie",

  components: {
    SearchBar,
    MovieCardRow,
  },

  data() {
    return {
      genres: [] as GenreData[],
      movies: [] as MovieCardData[],
    };
  },

  async mounted() {
    const allGenres = await searchMovieApi.getAllGenres();

    this.genres = searchMovieMapper.toGenreData(allGenres);
  },

  methods: {
    async onSearch(searchData: SearchData) {
      const request: SearchMovieRequest = {
        searchTerm: searchData.searchTerm,
        searchOption: searchMovieMapper.toSearchOption(searchData.option),
        sort: searchMovieMapper.toSort(searchData.sort),
        filters: searchData.filter
          ? searchMovieMapper.toFilters(searchData.filter)
          : [],
      };

      const response = await searchMovieApi.searchMovies(request);

      this.movies = searchMovieMapper.toMovieCards(response);
    },
  },
});
</script>
