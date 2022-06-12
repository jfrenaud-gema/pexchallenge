import FilterByGenre from "./FilterByGenre.vue";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Components/FilterByGenre",
  component: FilterByGenre,
} as Meta<typeof FilterByGenre>;

const Template: StoryFn<typeof FilterByGenre> = (args) => (
  <FilterByGenre {...args} />
);

export const Default = Template.bind({});
Default.args = {
  genres: ["Comedy", "Western"],
};
