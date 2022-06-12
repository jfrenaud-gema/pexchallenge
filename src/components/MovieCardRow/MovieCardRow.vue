<template>
  <div
    class="grid grid-flow-row grid-cols-1 gap-4 md:gap-4 md:grid-flow-col md:grid-cols-3"
    data-testid="movieCardRow"
  >
    <div v-for="movie in movies" :key="movie.title">
      <MovieCard :movie="movie" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import MovieCard from "../MovieCard/MovieCard.vue";
import { MovieCardData } from "../MovieCard/MovieCard.types";

export default defineComponent({
  name: "PexMovieCardRow",

  components: {
    MovieCard,
  },

  props: {
    movies: {
      type: Object as PropType<MovieCardData[]>,
      required: true,
    },
  },
});
</script>
