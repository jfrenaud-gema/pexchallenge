import Sort from "./Sort.vue";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Components/Sort",
  component: Sort,
} as Meta<typeof Sort>;

const Template: StoryFn<typeof Sort> = (args) => <Sort {...args} />;

export const Default = Template.bind({});
Default.args = {};
