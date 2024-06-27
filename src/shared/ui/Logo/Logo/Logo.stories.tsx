import { Meta } from '@storybook/react'
import { Logo } from './Logo'

export default {
  title: 'Components/UI/Logo',
  component: Logo
} as Meta

const Template: any = (args: any) => <Logo {...args} />

export const DefaultLogo = Template.bind({})
DefaultLogo.args = {
  logo: 'http://surl.li/smmje'
}

export const Placeholder = Template.bind({})
Placeholder.args = {}
