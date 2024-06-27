import { Meta } from "@storybook/react"
import { Skeleton } from "./Skeleton"

export default {
    title: "Components/UI/Skeleton",
    component: Skeleton,
} as Meta

const Template: any = (args: any) => <Skeleton {...args} />

export const Default = Template.bind({})
Default.args = {
    width: 600,
    height: 100,
}
