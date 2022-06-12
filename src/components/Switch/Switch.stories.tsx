import Switch from "./Switch.vue";
import { Meta, StoryFn } from "@storybook/vue3";

export default {
  title: "Components/Switch",
  component: Switch,
} as Meta<typeof Switch>;

const Template: StoryFn<typeof Switch> = (args) => <Switch {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Active = Template.bind({});
Active.args = {
  value: true,
};
