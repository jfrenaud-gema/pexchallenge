<template>
  <div class="flex flex-col md:flex-row gap-4 desktop:items-end">
    <div class="md:w-48">
      <Select
        :elements="searchOptions"
        :selected="searchOptionSelected"
        @on-change="onSearchOptionChanged"
      />
    </div>
    <div class="md:w-full">
      <div class="mt-1 relative rounded-md shadow-sm">
        <div
          class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"
        >
          <SearchIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
        </div>
        <input
          v-model="searchTerm"
          type="search"
          name="search"
          id="search"
          class="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-10 sm:text-sm border-gray-300 rounded-md"
          placeholder="Search term"
        />
      </div>
    </div>
    <div class="md:w-48">
      <button
        @click="search()"
        type="button"
        class="w-full justify-center inline-flex items-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
      >
        Search Now!
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Select from "../Select/Select.vue";
import { SelectElement } from "../Select/Select.types";
import { SearchData, SearchDataOption, SortDataBy } from "./SearchBar.types";
import { SearchIcon } from "@heroicons/vue/outline";

export default defineComponent({
  name: "PexSearchBar",

  components: {
    Select,
    SearchIcon,
  },

  emits: ["onSearch"],

  data() {
    const searchOptions: SelectElement[] = [
      { key: SearchDataOption.ALL, value: "All movies" },
      { key: SearchDataOption.ACTORS, value: "Actors" },
    ];
    const searchOptionSelected: SelectElement = searchOptions[0];

    return {
      searchOptions,
      searchOptionSelected,
      searchTerm: "",
    };
  },

  methods: {
    onSearchOptionChanged(value: SelectElement) {
      this.searchOptionSelected = value;
    },

    search() {
      const searchData: SearchData = {
        option: this.searchOptionSelected.key,
        searchTerm: this.searchTerm,
        sort: {
          by: SortDataBy.TITLE,
          ascending: true,
        },
      };

      this.$emit("onSearch", searchData);
    },
  },
});
</script>
