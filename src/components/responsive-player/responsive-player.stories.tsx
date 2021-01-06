import React from 'react'

import { Story, Meta } from '@storybook/react/types-6-0'

import ResponsivePlayer, { Props } from './responsive-player'

const meta: Meta = {
  title: 'Responsive Player',
  component: ResponsivePlayer
}

export default meta

const Template: Story<Props> = args => <ResponsivePlayer {...args} />

export const VimeoVideo = Template.bind({})
VimeoVideo.args = {
  url: 'https://vimeo.com/410693732'
}
