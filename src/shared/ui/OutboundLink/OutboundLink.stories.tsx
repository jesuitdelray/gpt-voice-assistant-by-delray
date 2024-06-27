import { Meta } from "@storybook/react"
import { OutboundLink } from "./OutboundLink"

export default {
    title: "Components/UI/OutboundLink",
    component: OutboundLink,
} as Meta

const Template: any = (args: any) => (
    <div style={{ width: "300px" }}>
        <OutboundLink {...args} />
    </div>
)

export const DefaultOutboundLink = Template.bind({})
DefaultOutboundLink.args = {
    href: "https://www.google.com",
    children: "Google",
}