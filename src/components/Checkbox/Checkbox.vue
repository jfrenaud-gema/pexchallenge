<template>
  <div class="flex flex-row gap-2 items-center">
    <label v-if="label" :for="id" class="text-gray-800">{{ label }}</label>
    <input
      v-model="checked"
      @click="onChecked()"
      :id="id"
      :name="id"
      type="checkbox"
      class="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300 rounded"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PexCheckbox",

  props: {
    id: {
      type: String,
    },
    label: {
      type: String,
    },
  },

  emits: ["onChecked"],

  data() {
    return {
      checked: false,
    };
  },

  methods: {
    onChecked() {
      this.$emit("onChecked", !this.checked);
    },
  },
});
</script>
