import Checkbox from "./Checkbox.vue";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
} as Meta<typeof Checkbox>;

const Template: StoryFn<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "id",
};

export const Label = Template.bind({});
Label.args = {
  id: "id",
  label: "Label",
};
