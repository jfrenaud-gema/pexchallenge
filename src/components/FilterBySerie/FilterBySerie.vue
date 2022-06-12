<template>
  <div class="flex flex-col gap-2">
    <div class="flex gap-2">
      <p class="text-gray-900">Filter by serie:</p>
      <Switch @on-change="onFilterBySerie" />
    </div>
    <Checkbox
      v-if="filterBySerie"
      id="serie"
      label="Is a serie?"
      @onChecked="onChecked"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Switch from "../Switch/Switch.vue";
import Checkbox from "../Checkbox/Checkbox.vue";

export default defineComponent({
  name: "PexFiilterBySerie",

  components: {
    Switch,
    Checkbox,
  },

  emits: ["onChange"],

  data() {
    return {
      filterBySerie: false,
      serie: false,
    };
  },

  methods: {
    onFilterBySerie(filterBySerie: boolean) {
      this.filterBySerie = filterBySerie;
      this.$emit("onChange", this.filterBySerie, this.serie);
    },

    onChecked(checked: boolean) {
      this.$emit("onChange", this.filterBySerie, checked);
    },
  },
});
</script>
