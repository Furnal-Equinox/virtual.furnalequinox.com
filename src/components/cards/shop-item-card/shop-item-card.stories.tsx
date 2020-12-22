import React from 'react'

import { Story, Meta } from '@storybook/react/types-6-0'

import ShopItemCard, { ShopItem } from './shop-item-card'

export default {
  title: 'Components/Cards/Shop Item Card',
  component: ShopItemCard,
} as Meta

const Template: Story<ShopItem> = args => <ShopItemCard {...args} />

export const Placeholder = Template.bind({})
Placeholder.args = {}