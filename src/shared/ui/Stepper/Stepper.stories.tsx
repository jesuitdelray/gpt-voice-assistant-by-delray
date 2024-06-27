import { Meta } from "@storybook/react";
import { Stepper } from "./Stepper";

export default {
  title: "Components/UI/Stepper",
  component: Stepper
} as Meta;

const Template: any = (args: any) => <Stepper {...args} />;

export const Default = Template.bind({});
Default.args = {};
