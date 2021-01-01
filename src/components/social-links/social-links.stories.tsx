import React from 'react'

import { Story, Meta } from '@storybook/react/types-6-0'

import SocialLinks, { SocialLink, Props } from './social-links'
import { Just } from 'purify-ts/Maybe'

const meta: Meta = {
  title: 'Social Links',
  component: SocialLinks
}

export default meta

const Template: Story<Props> = args => <SocialLinks {...args} />

export const NoLinks = Template.bind({})
NoLinks.args = {
  data: []
}

export const OneLink = Template.bind({})
OneLink.args = {
  data: [
    Just({ 
      name: 'deviantart', 
      url: 'https://www.deviantart.com/'
    })
  ]
}

export const SomeLinks = Template.bind({})
SomeLinks.args = {
  data: [
    Just({ 
      name: 'deviantart', 
      url: 'https://www.deviantart.com/'
    }),
    Just({ 
      name: 'facebook', 
      url: 'https://www.facebook.com/'
    }),
    Just({ 
      name: 'steam', 
      url: 'https://store.steampowered.com/'
    }),
    Just({ 
      name: 'twitter', 
      url: 'https://www.twitter.com/'
    }),
    Just({ 
      name: 'youtube', 
      url: 'https://www.youtube.com/'
    })
  ]
}

export const AllLinks = Template.bind({})
AllLinks.args = {
  data: [
    Just({
      name: 'behance',
      url: 'https://www.behance.net/'
    }),
    Just({ 
      name: 'deviantart', 
      url: 'https://www.deviantart.com/'
    }),
    Just({
      name: 'discord',
      url: 'https://discord.com/'
    }),
    Just({
      name: 'etsy',
      url: 'https://www.etsy.com/'
    }),
    Just({ 
      name: 'facebook', 
      url: 'https://www.facebook.com/'
    }),
    Just({
      name: 'furaffinity',
      url: 'https://www.furaffinity.net/'
    }),
    Just({
      name: 'github',
      url: 'https://github.com/'
    }),
    Just({
      name: 'instagram',
      url: 'https://www.instagram.com/'
    }),
    Just({
      name: 'picarto',
      url: 'https://picarto.tv/'
    }),
    Just({
      name: 'pinterest',
      url: 'https://www.pinterest.com/'
    }),
    Just({ 
      name: 'steam', 
      url: 'https://store.steampowered.com/'
    }),
    Just({
      name: 'telegram',
      url: 'https://telegram.org/'
    }),
    Just({
      name: 'tumblr',
      url: 'https://www.tumblr.com/'
    }),
    Just({
      name: 'twitch',
      url: 'https://www.twitch.tv/'
    }),
    Just({ 
      name: 'twitter', 
      url: 'https://www.twitter.com/'
    }),
    Just({ 
      name: 'youtube', 
      url: 'https://www.youtube.com/'
    })
  ]
}
