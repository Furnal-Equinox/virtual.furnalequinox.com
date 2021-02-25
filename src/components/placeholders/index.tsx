import React from 'react'

import placeholderAdBanner from '../../../content/images/VFE_ad_banner.png'

import placeholderDealerBanner from '../../../content/images/VFE_dealer_banner.png'

import placeholderProductPhoto from '../../../content/images/VFE_product_photo.png'

export const PlaceholderAdBanner: React.FC = () =>
  <img src={placeholderAdBanner} className='img-fluid' />

export const PlaceholderImage: React.FC = () => 
  <img src={placeholderDealerBanner} className='card-img-top' />

export const PlaceholderProductPhoto: React.FC = () =>
  <img src={placeholderProductPhoto} className='card-img-top' />

export const PlaceholderSVG: React.FC = () =>
  <svg
    className='bd-placeholder-img card-img-top'
    width='100%'
    height='250'
    xmlns='http://www.w3.org/2000/svg'
    preserveAspectRatio='xMidYMid slice'
    focusable='false'
    role='img'
    aria-label='Placeholder: Thumbnail'
  >
    <title>Placeholder</title>
    <rect width='100%' height='100%' fill='#55595c' />
    <text x='50%' y='50%' fill='#eceeef' dy='.3em'>
      Dealer Banner
    </text>
  </svg>