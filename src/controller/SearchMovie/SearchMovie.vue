<template>
  <div class="container mx-auto">
    <SearchBar :genres="genres" @on-search="onSearch" />
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

export default defineComponent({
  name: "PexSearchMovie",

  components: {
    SearchBar,
  },

  data() {
    const genres: GenreData[] = [];
    return {
      genres,
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

      console.log(response);
    },
  },
});
</script>
