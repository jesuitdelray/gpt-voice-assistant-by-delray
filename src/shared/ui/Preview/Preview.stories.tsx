import { useState } from "react"
import { Meta } from "@storybook/react"
import { Preview } from "./Preview"
import { Typography } from "../Typography/Typography"
import { NormalButton } from "../Button"

export default {
    title: "Components/UI/Preview",
    component: Preview,
    argTypes: {
        isOpen: { control: "boolean" },
    },
} as Meta

const Template: any = (args: any) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <NormalButton onClick={() => setIsOpen(true)} variant="primary" size="medium" rightIcon>
                Open Preview
            </NormalButton>
            <Preview {...args} isOpen={isOpen} onClose={() => setIsOpen(false)}>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "column",
                        height: "260px",
                    }}
                >
                    <Typography>Preview Content</Typography>
                </div>
            </Preview>
        </>
    )
}

export const Default = Template.bind({})
Default.args = {
    lazy: false,
    title: "Preview Title",
}
