<template>
  <div class="flex flex-col gap-2">
    <div class="flex gap-2">
      <p class="text-gray-900">Filter by serie:</p>
      <Switch
        v-model="filterBySerie"
        :class="[
          filterBySerie ? 'bg-indigo-600' : 'bg-gray-200',
          'relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500',
        ]"
        @update:modelValue="onFilterBySerie"
      >
        <span
          aria-hidden="true"
          :class="[
            filterBySerie ? 'translate-x-5' : 'translate-x-0',
            'pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
          ]"
        />
      </Switch>
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
import { Switch } from "@headlessui/vue";
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
    onFilterBySerie() {
      this.$emit("onChange", this.filterBySerie, this.serie);
    },

    onChecked(checked: boolean) {
      this.$emit("onChange", this.filterBySerie, checked);
    },
  },
});
</script>
