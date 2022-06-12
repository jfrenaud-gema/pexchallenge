<template>
  <div class="flex flex-col gap-2">
    <div class="w-40">
      <Select
        :elements="sortByItems"
        :selected="sortBySelected"
        @on-change="onSortByChanged"
      />
    </div>
    <div class="flex gap-2 items-center">
      <p>Ascending</p>
      <Switch :value="sortOrder" @on-change="onSortOrderChanged" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Select from "../Select/Select.vue";
import { SelectElement } from "../Select/Select.types";
import Switch from "../Switch/Switch.vue";
import { SortDataBy } from "../SearchBar/SearchBar.types";

export default defineComponent({
  name: "PexSort",

  components: {
    Select,
    Switch,
  },

  emits: ["onSortByChanged", "onSortOrderChanged"],

  data() {
    const sortByItems: SelectElement[] = [
      {
        key: SortDataBy.TITLE,
        value: "Title",
      },
      {
        key: SortDataBy.RELEASE_DATE,
        value: "Release Date",
      },
    ];
    const sortBySelected: SelectElement = sortByItems[0];

    return {
      sortByItems,
      sortBySelected,
      sortOrder: true,
    };
  },

  methods: {
    onSortByChanged(sortBy: SelectElement) {
      this.sortBySelected = sortBy;
      this.$emit("onSortByChanged", this.sortBySelected);
    },

    onSortOrderChanged(sortOrder: boolean) {
      this.sortOrder = sortOrder;
      this.$emit("onSortOrderChanged", this.sortOrder);
    },
  },
});
</script>
