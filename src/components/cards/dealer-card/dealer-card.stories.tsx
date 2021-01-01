import React from 'react'

import { Story, Meta } from '@storybook/react/types-6-0'

import DealerCard, { Dealer } from './dealer-card'

const meta: Meta = {
  title: 'Components/Cards/Dealer Card',
  component: DealerCard
}

export default meta

const Template: Story<Dealer> = args => <DealerCard {...args} />

export const Placeholder = Template.bind({})
Placeholder.args = {}
