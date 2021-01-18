import React from 'react'

import { Story, Meta } from '@storybook/react/types-6-0'

import ShopItemCard, { ShopItem } from '.'

const meta: Meta = {
  title: 'Components/Cards/Shop Item Card',
  component: ShopItemCard
}

export default meta

const Template: Story<ShopItem> = args => <ShopItemCard {...args} />

export const Placeholder = Template.bind({})
Placeholder.args = {}
