import React from 'react'
import SocialLinks, { Props as SocialLinksProps } from '../social-links'
import './style.scss'

export interface Props {
  copyright: string
  socialLinks: SocialLinksProps
}

const Footer: React.FC<Props> = ({ copyright, socialLinks }: Props) => (
  <div className='footer'>
    <div className='container text-center text-white py-2'>
      <div className='row'>
        <div className='col'>
          <p>
            <strong>{ copyright }</strong>
          </p>
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <p>Help</p>
        </div>
        <div className='col'>
          <p>Privacy Policies</p>
        </div>
        <div className='col'>
          <p>Credits</p>
        </div>
      </div>
      <SocialLinks data={socialLinks.data} />
      <div className='row'>
        <div className='col'>
          <a
            href='https://www.netlify.com/'
            title='Hosted by Netlify'
            target='_blank'
            rel='noopener noreferrer'
            style={{ height: '2rem' }}
          >
            <img src='https://www.netlify.com/img/press/logos/logomark.svg' alt='Deploys by Netlify' />
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default Footer