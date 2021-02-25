import React from 'react'
import SocialLinks, { Props as SocialLinksProps } from '../social-links'
import Link from 'gatsby-link'
import { OutboundLink } from 'gatsby-plugin-google-gtag'
import './style.scss'

import { TextCard } from '../index'

export interface Props {
  copyright: string
  socialLinks: SocialLinksProps
}

const Footer: React.FC<Props> = ({ copyright, socialLinks }: Props) => (
  <div className='container p-3'>
  <TextCard>
    <div className='row'>
      <div className='col'>
        <p>
          <strong>{copyright}</strong>
        </p>
      </div>
    </div>
    <div className='row'>
      <div className='col'>
        <Link to={'/help/'}>Help</Link>
      </div>
      <div className='col'>
        <OutboundLink
          href='https://furnalequinox.com/privacy-policy/'
          title='Link to privacy policy page on the main Furnal Equinox website'
          target='_blank'
          rel='noopener noreferrer'
        >
          Privacy Policies
        </OutboundLink>
      </div>
      <div className='col'>
        <Link to={'/info/#credits'}>Credits</Link>
      </div>
    </div>
    <SocialLinks data={socialLinks.data} />
  </TextCard>
  </div>
)

export default Footer
