import React from 'react'

import { Story, Meta } from '@storybook/react/types-6-0'

import Footer, { Props } from './footer'

import config from '../../../site-config'

const meta: Meta = {
  title: 'Footer',
  component: Footer
}

export default meta

const Template: Story<Props> = args => <Footer {...args} />

export const MainFooter = Template.bind({})
MainFooter.args = {
  copyright: config.copyright,
  socialLinks: { 
    data: {
      facebook: config.userLinks.facebook,
      flickr: config.userLinks.flickr,
      twitter: config.userLinks.twitter,
      youtube: config.userLinks.youtube
    }
  }
}
