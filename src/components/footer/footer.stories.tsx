import React from 'react'

import { Story, Meta } from '@storybook/react/types-6-0'

import Footer, { Props } from './footer'

const meta: Meta = {
  title: 'Footer',
  component: Footer
}

export default meta

const Template: Story<Props> = args => <Footer {...args} />

export const MainFooter = Template.bind({})
MainFooter.args = {
  copyright: 'Copyright © 2020 Anthropomorphic Events of Ontario'
}
