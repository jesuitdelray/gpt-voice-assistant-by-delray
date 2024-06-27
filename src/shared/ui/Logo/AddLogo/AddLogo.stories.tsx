import { Meta } from '@storybook/react'
import { AddLogo } from './AddLogo'

export default {
  title: 'Components/UI/AddLogo',
  component: AddLogo
} as Meta

const Template: any = (args: any) => <AddLogo {...args} />

export const Default = Template.bind({})
Default.args = {}
