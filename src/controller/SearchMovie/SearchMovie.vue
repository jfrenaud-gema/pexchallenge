<template>
  <div class="container mx-auto">
    <SearchBar @on-search="onSearch" />
  </div>
</template>

<script lang="ts">
import { SearchMovieRequest } from "../../model";
import { defineComponent } from "vue";
import SearchBar from "../../components/SearchBar/SearchBar.vue";
import { SearchData } from "../../components/SearchBar/SearchBar.types";
import searchMovieMapper from "../SearchMovieMapper";
import searchMovieApi from "../../model/SearchMovieApi";

export default defineComponent({
  name: "PexSearchMovie",

  components: {
    SearchBar,
  },

  methods: {
    async onSearch(searchData: SearchData) {
      const request: SearchMovieRequest = {
        searchTerm: searchData.searchTerm,
        searchOption: searchMovieMapper.toSearchOption(searchData.option),
        sort: searchMovieMapper.toSort(searchData.sort),
        filters: [],
      };

      const response = await searchMovieApi.searchMovies(request);

      console.log(response);
    },
  },
});
</script>
