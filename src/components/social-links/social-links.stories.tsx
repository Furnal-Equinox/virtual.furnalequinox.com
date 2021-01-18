import React from 'react'

import { Story, Meta } from '@storybook/react/types-6-0'

import SocialLinks, { Props } from '.'

const meta: Meta = {
  title: 'Social Links',
  component: SocialLinks
}

export default meta

const Template: Story<Props> = args => <SocialLinks {...args} />

export const NoLinks = Template.bind({})
NoLinks.args = {
  data: {}
}

export const OneLink = Template.bind({})
OneLink.args = {
  data: {
    deviantart: 'https://www.deviantart.com/'
  }
}

export const SomeLinks = Template.bind({})
SomeLinks.args = {
  data: {
    deviantart: 'https://www.deviantart.com/',
    facebook: 'https://www.facebook.com/',
    steam: 'https://store.steampowered.com/',
    twitter: 'https://www.twitter.com/',
    youtube: 'https://www.youtube.com/'
  }
}

export const AllLinks = Template.bind({})
AllLinks.args = {
  data: {
    behance: 'https://www.behance.net/',
    deviantart: 'https://www.deviantart.com/',
    discord: 'https://discord.com/',
    etsy: 'https://www.etsy.com/',
    facebook: 'https://www.facebook.com/',
    flickr: 'https://www.flickr.com/',
    furaffinity: 'https://www.furaffinity.net/',
    github: 'https://github.com/',
    instagram: 'https://www.instagram.com/',
    picarto: 'https://picarto.tv/',
    pinterest: 'https://www.pinterest.com/',
    steam: 'https://store.steampowered.com/',
    telegram: 'https://telegram.org/',
    tumblr: 'https://www.tumblr.com/',
    twitch: 'https://www.twitch.tv/',
    twitter: 'https://www.twitter.com/',
    youtube: 'https://www.youtube.com/'
  }
}
