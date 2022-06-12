<template>
  <div class="flex flex-col gap-2">
    <p class="text-gray-900">Filter by genre:</p>
    <div class="flex flex-col gap-1">
      <Checkbox
        v-for="genre in genres"
        :key="genre"
        :id="genre"
        :label="genre"
        @onChecked="(checked) => onChecked(genre, checked)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Checkbox from "../Checkbox/Checkbox.vue";

export default defineComponent({
  name: "PexFiilterByGenre",

  components: {
    Checkbox,
  },

  props: {
    genres: {
      type: Object as PropType<string[]>,
      required: true,
    },
  },

  emits: ["onChecked"],

  methods: {
    onChecked(genre: string, checked: boolean) {
      this.$emit("onChecked", genre, checked);
    },
  },
});
</script>
