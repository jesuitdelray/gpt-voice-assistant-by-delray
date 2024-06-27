import { useState } from 'react'
import { Meta } from '@storybook/react'

import { SelectionDropdown } from './SelectionDropdown'

export default {
  title: 'Components/UI/SelectionDropdown',
  component: SelectionDropdown
} as Meta

const options = [
  { value: 'Option 1', label: 'Option 1' },
  { value: 'Option 2', label: 'Option 2' },
  { value: 'Option 3', label: 'Option 3' },
  { value: 'Option 4', label: 'Option 4' },
  { value: 'Option 5', label: 'Option 5' },
  { value: 'Option 6', label: 'Option 6' },
  { value: 'Option 7', label: 'Option 7' },
  { value: 'Option 8', label: 'Option 8' },
  { value: 'Option 9', label: 'Option 9' },
  { value: 'Option 10', label: 'Option 10' },
  { value: 'Option 11', label: 'Option 11' },
  { value: 'Option 12', label: 'Option 12' },
  { value: 'Option 13', label: 'Option 13' },
  { value: 'Option 14', label: 'Option 14' },
  { value: 'Option 15', label: 'Option 15' },
  { value: 'Option 16', label: 'Option 16' },
  { value: 'Option 17', label: 'Option 17' },
  { value: 'Option 18', label: 'Option 18' },
  { value: 'Option 19', label: 'Option 19' },
  { value: 'Option 20', label: 'Option 20' },
  { value: 'Option 21', label: 'Option 21' },
  { value: 'Option 22', label: 'Option 22' },
  { value: 'Option 23', label: 'Option 23' },
  { value: 'Option 24', label: 'Option 24' },
  { value: 'Option 25', label: 'Option 25' },
  { value: 'Option 26', label: 'Option 26' },
  { value: 'Option 27', label: 'Option 27' },
  { value: 'Option 28', label: 'Option 28' },
  { value: 'Option 29', label: 'Option 29' },
  { value: 'Option 30', label: 'Option 30' },
  { value: 'Option 31', label: 'Option 31' },
  { value: 'Option 32', label: 'Option 32' },
  { value: 'Option 33', label: 'Option 33' }
]

const Template: any = (args: any) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [selectedValue, setSelectedValue] = useState<string | undefined>(args.value)

  const handleChange = (value: string) => {
    setSelectedValue(value)
    args.onChange?.(value)
  }

  const handleFocus = () => {
    setIsOpen(!isOpen)
    args.onFocus?.()
  }

  const handleClose = () => {
    setIsOpen(false)
    args.onClose?.()
  }

  return (
    <div style={{ width: '300px' }}>
      <SelectionDropdown
        {...args}
        isOpen={isOpen}
        options={options}
        onChange={handleChange}
        onClose={handleClose}
        onFocus={handleFocus}
        value={selectedValue}
      />
    </div>
  )
}

export const Default = Template.bind({})
Default.args = {
  isOpen: false,
  options: options,
  value: 'Option 1'
}
