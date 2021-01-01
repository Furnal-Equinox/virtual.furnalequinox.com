import React from 'react'

import { Story, Meta } from '@storybook/react/types-6-0'

import SocialCard, { SocialItem } from './social-card'

const meta: Meta = {
  title: 'Components/Cards/Social Media Link Card',
  component: SocialCard
}

export default meta

const Template: Story<SocialItem> = args => <SocialCard {...args} />

export const Placeholder = Template.bind({})
Placeholder.args = {}
