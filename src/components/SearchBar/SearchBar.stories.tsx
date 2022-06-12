import SearchBar from "./SearchBar.vue";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Components/SearchBar",
  component: SearchBar,
} as Meta<typeof SearchBar>;

const Template: StoryFn<typeof SearchBar> = (args) => <SearchBar {...args} />;

export const Default = Template.bind({});
Default.args = {
  genres: ["Comedy", "Western"],
};
