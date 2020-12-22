import React from 'react'

import { Story, Meta } from '@storybook/react/types-6-0'

import DealerCard, { Dealer } from './dealer-card'

export default {
  title: 'Components/Cards/Dealer Card',
  component: DealerCard,
} as Meta

const Template: Story<Dealer> = args => <DealerCard {...args} />

export const Placeholder = Template.bind({})
Placeholder.args = {}