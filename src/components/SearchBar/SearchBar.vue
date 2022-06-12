<template>
  <form
    class="flex flex-col gap-4"
    @submit="
      (e) => {
        e.preventDefault();
        search();
      }
    "
  >
    <div class="flex flex-col md:flex-row gap-4 xl:items-end">
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
          data-testid="searchButton"
          class="w-full justify-center inline-flex items-center px-4 py-2 border border-transparent shadow-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
        >
          Search Now!
        </button>
      </div>
    </div>
    <div class="flex flex-col md:flex-row md:gap-10 gap-3">
      <FilterByGenre :genres="genres" @on-checked="onFilterByGenreChanged" />
      <FilterBySerie @on-change="onFilterBySerieChanged" />
      <Sort
        @on-sort-by-changed="onSortByChanged"
        @on-sort-order-changed="onSortOrderChanged"
      />
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import Select from "../Select/Select.vue";
import FilterByGenre from "../FilterByGenre/FilterByGenre.vue";
import { SelectElement } from "../Select/Select.types";
import {
  FilterData,
  GenreData,
  SearchData,
  SearchDataOption,
  SortDataBy,
} from "./SearchBar.types";
import { SearchIcon } from "@heroicons/vue/outline";
import FilterBySerie from "../FilterBySerie/FilterBySerie.vue";
import Sort from "../Sort/Sort.vue";

export default defineComponent({
  name: "PexSearchBar",

  components: {
    Select,
    SearchIcon,
    FilterByGenre,
    FilterBySerie,
    Sort,
  },

  props: {
    genres: {
      type: Object as PropType<string[]>,
      required: true,
    },
  },

  emits: ["onSearch"],

  data() {
    const searchOptions: SelectElement[] = [
      { key: SearchDataOption.ALL, value: "All movies" },
      { key: SearchDataOption.ACTORS, value: "Actors" },
    ];
    const searchOptionSelected: SelectElement = searchOptions[0];
    const selectedGenres: GenreData[] = [];

    return {
      searchOptions,
      searchOptionSelected,
      searchTerm: "",
      selectedGenres,
      filterBySerie: false,
      serie: false,
      sortBy: SortDataBy.TITLE as SortDataBy,
      sortAscending: true,
    };
  },

  methods: {
    onSearchOptionChanged(value: SelectElement) {
      this.searchOptionSelected = value;
    },

    onFilterByGenreChanged(genre: string, checked: boolean) {
      if (checked) {
        this.selectedGenres.push(genre);
      } else {
        const index = this.selectedGenres.indexOf(genre);
        this.selectedGenres.splice(index, 1);
      }
    },

    onFilterBySerieChanged(filterBySerie: boolean, serie: boolean) {
      this.filterBySerie = filterBySerie;
      this.serie = serie;
    },

    onSortByChanged(sortBy: SelectElement) {
      this.sortBy = sortBy.key;
    },

    onSortOrderChanged(ascending: boolean) {
      this.sortAscending = ascending;
    },

    search() {
      let filter: FilterData | undefined =
        this.selectedGenres.length || this.filterBySerie ? {} : undefined;

      if (filter) {
        if (this.selectedGenres.length) {
          filter.genres = this.selectedGenres;
        }

        if (this.filterBySerie) {
          filter.serie = this.serie;
        }
      }

      const searchData: SearchData = {
        option: this.searchOptionSelected.key,
        searchTerm: this.searchTerm,
        filter,
        sort: {
          by: this.sortBy,
          ascending: this.sortAscending,
        },
      };

      this.$emit("onSearch", searchData);
    },
  },
});
</script>
