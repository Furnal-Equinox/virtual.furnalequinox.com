import React from 'react'

import { Story, Meta } from '@storybook/react/types-6-0'

import Jumbotron, { Props } from './jumbotron'

export default {
  title: 'Jumbotron',
  component: Jumbotron,
} as Meta

const Template: Story<Props> = args => <Jumbotron {...args} />

export const Main = Template.bind({})
Main.args = {
  title: 'Hello!',
  subtitle: 'Isn\'t design fun?'
}