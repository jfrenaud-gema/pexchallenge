import FilterBySerie from "./FilterBySerie.vue";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Components/FilterBySerie",
  component: FilterBySerie,
} as Meta<typeof FilterBySerie>;

const Template: StoryFn<typeof FilterBySerie> = (args) => (
  <FilterBySerie {...args} />
);

export const Default = Template.bind({});
Default.args = {};
