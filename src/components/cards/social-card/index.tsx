import React from 'react'

import Anchor from '../../anchor'
import { PlaceholderSVG } from '../../placeholders'

export interface SocialItem {
  title?: string
  description?: string
  banner?: string
  label?: string
  url?: string
}

type Props = SocialItem

const SocialCard: React.FC<Props> = ({ title, description, banner, label, url }: Props) => {
  return (
    <div className='card rounded-3 border border-primary border-5 mb-5'>
      {banner !== undefined
        ? <img src={banner} className='card-img-top' />
        : <PlaceholderSVG />}
      <div className='card-body'>
        <div className='row'>
          <div className='col'>
            <p className='m-0'>
              {title ?? 'Title'}
            </p>
          </div>
          <div className='col'>
            <p className='card-text text-center'>
              {description ?? 'Description'}
            </p>
          </div>
        </div>
        <div className='row mt-3'>
          <Anchor label={label ?? 'Label'} url={url ?? ''} isFullwidth />
        </div>
      </div>
    </div>
  )
}

export default SocialCard
