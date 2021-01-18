import React from 'react'

import { Story, Meta } from '@storybook/react/types-6-0'

import Navibar, { Props } from '.'

const meta: Meta = {
  title: 'Navibar',
  component: Navibar
}

export default meta

const Template: Story<Props> = args => <Navibar {...args} />

const homePath = {
  location: {
    pathname: '/'
  }
}

export const Home = Template.bind({})
Home.args = homePath
