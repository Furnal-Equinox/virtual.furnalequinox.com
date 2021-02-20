import React from 'react'

import placeholderImage from '../../../content/images/VFE_dealer_banner.png'

export const PlaceholderImage: React.FC = () => 
    <img src={placeholderImage} className='card-img-top rounded-card-img-top' />

export const PlaceholderSVG: React.FC = () =>
  <svg
    className='bd-placeholder-img card-img rounded-card-img-top'
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