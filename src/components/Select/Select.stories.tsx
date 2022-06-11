import Select from "./Select.vue";
import { SelectElement } from "./Select.types";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Components/Select",
  component: Select,
} as Meta<typeof Select>;

const Template: StoryFn<typeof Select> = (args) => <Select {...args} />;

const elements: SelectElement[] = [
  { key: 1, value: "Wade Cooper" },
  { key: 2, value: "Arlene Mccoy" },
  { key: 3, value: "Devon Webb" },
  { key: 4, value: "Tom Cook" },
  { key: 5, value: "Tanya Fox" },
  { key: 6, value: "Hellen Schmidt" },
  { key: 7, value: "Caroline Schultz" },
  { key: 8, value: "Mason Heaney" },
  { key: 9, value: "Claudie Smitham" },
  { key: 10, value: "Emil Schaefer" },
];

export const Default = Template.bind({});
Default.args = {
  elements: elements,
  selected: elements[3],
};
