import React from 'react'

import { Story, Meta } from '@storybook/react/types-6-0'

import Navibar, { Props } from './navibar'

export default {
  title: 'Navibar',
  component: Navibar,
} as Meta

const Template: Story<Props> = args => <Navibar {...args} />

export const Home = Template.bind({})
Home.args = {
  location: {
    pathname: '/'
  }
}