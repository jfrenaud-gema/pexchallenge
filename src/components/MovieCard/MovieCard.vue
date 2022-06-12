<template>
  <div class="flex flex-col rounded-lg shadow-lg overflow-hidden h-full">
    <div class="flex-1 bg-white p-6 flex flex-col justify-between">
      <div class="flex-1">
        <div class="flex space-x-1">
          <p
            class="text-sm font-medium text-indigo-600"
            v-for="genre in movie.genres"
            :key="genre"
          >
            {{ genre }}
          </p>
        </div>
        <p class="text-xl font-semibold text-gray-900">{{ movie.title }}</p>
      </div>
      <div class="mt-2 flex items-center">
        <div>
          <p
            class="text-sm font-medium text-gray-900"
            v-for="actor in movie.actors"
            :key="actor"
          >
            {{ actor }}
          </p>
          <div class="flex space-x-1 text-sm text-gray-500 mt-1">
            <time>{{ movie.releaseDate }}</time>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { MovieCardData } from "./MovieCard.types";

export default defineComponent({
  name: "PexMovieCard",

  props: {
    movie: {
      type: Object as PropType<MovieCardData>,
      required: true,
    },
  },
});
</script>
