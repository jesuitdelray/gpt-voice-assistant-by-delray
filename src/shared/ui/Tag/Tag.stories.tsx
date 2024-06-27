import { Meta } from "@storybook/react";
import { Tag } from "./Tag";

export default {
  title: "Components/UI/Tag",
  component: Tag
} as Meta;

const Template: any = (args: any) => <Tag {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Tag label"
};
