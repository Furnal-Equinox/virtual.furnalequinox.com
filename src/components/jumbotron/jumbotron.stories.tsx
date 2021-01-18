import React from 'react'

import { Story, Meta } from '@storybook/react/types-6-0'

import Jumbotron, { Props } from '.'

const meta: Meta = {
  title: 'Jumbotron',
  component: Jumbotron
}

export default meta

const Template: Story<Props> = args => <Jumbotron {...args} />

export const Main = Template.bind({})
Main.args = {
  title: 'Hello!',
  subtitle: 'Isn\'t design fun?'
}
