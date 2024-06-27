import { Meta } from "@storybook/react"
import { Avatar } from "./Avatar"

export default {
    title: "Components/UI/Avatar",
    component: Avatar,
} as Meta

const Template: any = (args: any) => <Avatar {...args} />

export const Default = Template.bind({})
Default.args = {
    avatar: "https://d3544la1u8djza.cloudfront.net/APHI/Blog/2020/07-23/How+Much+Does+It+Cost+to+Have+a+Cat+_+ASPCA+Pet+Insurance+_+black+cat+with+yellow+eyes+peeking+out-min.jpg",
    name: "Mike Johnson",
}

export const Placeholder = Template.bind({})
Placeholder.args = {
    name: "Mike Johnson",
}
