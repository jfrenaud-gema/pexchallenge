import Checkbox from "./Checkbox.vue";
import { Meta, StoryFn } from "@storybook/vue3";
import { userEvent, within } from "@storybook/testing-library";
import { expect } from "@storybook/jest";

export default {
  title: "Components/Checkbox",
  component: Checkbox,
} as Meta<typeof Checkbox>;

const Template: StoryFn<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: "id",
};

export const ClickOnCheckbox = Template.bind({});
ClickOnCheckbox.args = {
  id: "id",
};
ClickOnCheckbox.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByRole("checkbox"));
  await expect(canvas.getByRole("checkbox")).toBeChecked();
};

export const Label = Template.bind({});
Label.args = {
  id: "id",
  label: "Label",
};

export const ClickOnLabel = Template.bind({});
ClickOnLabel.args = {
  id: "id",
  label: "Label",
};
ClickOnLabel.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  await userEvent.click(canvas.getByText("Label"));
  await expect(canvas.getByRole("checkbox")).toBeChecked();
};
