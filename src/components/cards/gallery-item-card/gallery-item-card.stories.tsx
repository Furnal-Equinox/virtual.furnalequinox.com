import React from 'react'

import { Story, Meta } from '@storybook/react/types-6-0'

import GalleryItemCard, { GalleryItem } from './gallery-item-card'

export default {
  title: 'Components/Cards/Art Gallery Card',
  component: GalleryItemCard,
} as Meta

const Template: Story<GalleryItem> = args => <GalleryItemCard {...args} />

export const Placeholder = Template.bind({})
Placeholder.args = {}