<template>
  <SearchMovie />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SearchMovie from "./controller/SearchMovie/SearchMovie.vue";

export default defineComponent({
  name: "PexSearchMovie",

  components: {
    SearchMovie,
  },
});
</script>
