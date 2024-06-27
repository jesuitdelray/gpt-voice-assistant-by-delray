import { Meta } from "@storybook/react";
import { Textarea } from "./Textarea";

export default {
  title: "Components/UI/Textarea",
  component: Textarea
} as Meta;

const Template: any = (args: any) => (
  <div style={{ width: "681px" }}>
    <Textarea {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  placeholder: "Enter your text here..."
};

export const WithError = Template.bind({});
WithError.args = {
  error: "This field is required"
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
  placeholder: "Enter your text here..."
};
