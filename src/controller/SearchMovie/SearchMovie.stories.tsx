import SearchMovie from "./SearchMovie.vue";
import { Meta, StoryFn } from "@storybook/vue3";
import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

export default {
  title: "Pages/SearchMovie",
  component: SearchMovie,
} as Meta<typeof SearchMovie>;

const Template: StoryFn<typeof SearchMovie> = (args) => (
  <SearchMovie {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const Search = Template.bind({});
Search.args = {};
Search.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByTestId("searchButton"));
  await expect(canvas.getByTestId("movieCardRow")).toBeInTheDocument();
};
