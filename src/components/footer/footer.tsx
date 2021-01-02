import React from 'react'
import SocialLinks, { Props as SocialLinksProps } from '../social-links/social-links'
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
    </div>
  </div>
)

export default Footer
