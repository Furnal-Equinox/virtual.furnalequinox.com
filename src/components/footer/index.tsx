import React from 'react'
import SocialLinks, { Props as SocialLinksProps } from '../social-links'
import Link from 'gatsby-link'
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
          <Link
            title='Link to the help page on this website.'
            to='/help/'
            tabIndex={0}
          >
            Help
          </Link>
        </div>
        <div className='col'>
          <a
            href='https://furnalequinox.com/privacy-policy/'
            title='Link to privacy policy page on the main Furnal Equinox website. This link will open in a new tab.'
            target='_blank'
            rel='noopener noreferrer'
            tabIndex={0}
          >
            Privacy Policies
          </a>
        </div>
        <div className='col'>
          <Link
            title='Link to the credits section on the info page on this website.'
            to='/info/#credits'
            tabIndex={0}
          >
            Credits
          </Link>
        </div>
      </div>
      <SocialLinks data={socialLinks.data} />
    </TextCard>
  </div>
)

export default Footer
