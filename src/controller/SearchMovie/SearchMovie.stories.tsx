import SearchMovie from "./SearchMovie.vue";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Pages/SearchMovie",
  component: SearchMovie,
} as Meta<typeof SearchMovie>;

const Template: StoryFn<typeof SearchMovie> = (args) => (
  <SearchMovie {...args} />
);

export const Default = Template.bind({});
Default.args = {};
