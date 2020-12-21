import React from 'react'

import { Story, Meta } from '@storybook/react/types-6-0'

import Button, { Props } from './button'

export default {
  title: 'Button',
  component: Button,
} as Meta

const Template: Story<Props> = args => <Button {...args} />

export const Primary = Template.bind({})
Primary.args = {
  state: undefined,
  hasOutline: false,
  size: undefined,
  label: 'Button'
}

export const PrimaryLarge = Template.bind({})
PrimaryLarge.args = {
  state: undefined,
  hasOutline: false,
  size: 'lg',
  label: 'Button'
}

export const PrimarySmall = Template.bind({})
PrimarySmall.args = {
  state: undefined,
  hasOutline: false,
  size: 'sm',
  label: 'Button'
}

export const Secondary = Template.bind({})
Secondary.args = {
  state: 'secondary',
  hasOutline: false,
  size: undefined,
  label: 'Button'
}

export const Success = Template.bind({})
Success.args = {
  state: 'success',
  hasOutline: false,
  size: undefined,
  label: 'Button'
}

export const Danger = Template.bind({})
Danger.args = {
  state: 'danger',
  hasOutline: false,
  size: undefined,
  label: 'Button'
}

export const Warning = Template.bind({})
Warning.args = {
  state: 'warning',
  hasOutline: false,
  size: undefined,
  label: 'Button'
}

export const Info = Template.bind({})
Info.args = {
  state: 'info',
  hasOutline: false,
  size: undefined,
  label: 'Button'
}

export const Light = Template.bind({})
Light.args = {
  state: 'light',
  hasOutline: false,
  size: undefined,
  label: 'Button'
}

export const Dark = Template.bind({})
Dark.args = {
  state: 'dark',
  hasOutline: false,
  size: undefined,
  label: 'Button'
}