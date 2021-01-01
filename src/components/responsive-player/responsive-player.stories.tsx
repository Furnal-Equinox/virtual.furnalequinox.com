import React from 'react'

import { Story, Meta } from '@storybook/react/types-6-0'

import ResponsivePlayer, { Props } from './responsive-player'

const meta: Meta = {
  title: 'Responsive Player',
  component: ResponsivePlayer
}

export default meta

const Template: Story<Props> = args => <ResponsivePlayer {...args} />

export const YouTubeLivestream = Template.bind({})
YouTubeLivestream.args = {
  url: 'https://www.youtube.com/watch?v=21X5lGlDOfg'
}
