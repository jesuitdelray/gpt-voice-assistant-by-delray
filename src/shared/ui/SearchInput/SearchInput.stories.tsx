import { Meta } from '@storybook/react'
import { SearchInput } from './SearchInput'

export default {
  title: 'Components/UI/SearchInput',
  component: SearchInput
} as Meta

const Template: any = (args: any) => (
  <div style={{ width: '300px' }}>
    <SearchInput {...args} />
  </div>
)

export const Default = Template.bind({})
Default.args = {
  children: 'SearchInput label'
}
