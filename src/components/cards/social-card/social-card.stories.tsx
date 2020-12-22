import React from 'react'

import { Story, Meta } from '@storybook/react/types-6-0'

import SocialCard, { SocialItem } from './social-card'

export default {
  title: 'Components/Cards/Social Media Link Card',
  component: SocialCard,
} as Meta

const Template: Story<SocialItem> = args => <SocialCard {...args} />

export const Placeholder = Template.bind({})
Placeholder.args = {}