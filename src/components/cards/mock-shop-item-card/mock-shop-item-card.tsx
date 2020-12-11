import React from 'react'
import './style.scss'

import ClickableExternalCard from '../clickable-external-card/clickable-external-card'

const MockShopItemCard: React.FC = () => {
  return (
    <ClickableExternalCard url='https://furnalequinox.com'>
      <div className='card rounded-card mb-5 shadow-sm'>
        <svg 
          className='bd-placeholder-img card-img- rounded-card-img-top' 
          width='100%' 
          height='225' 
          xmlns='http://www.w3.org/2000/svg' 
          preserveAspectRatio='xMidYMid slice' 
          focusable='false' 
          role='img' 
          aria-label='Placeholder: Thumbnail'
        >
          <title>Placeholder</title>
          <rect width='100%' height='100%' fill='#55595c'/>
          <text x='50%' y='50%' fill='#eceeef' dy='.3em'>
            Item Picture
          </text>
        </svg>
        <div className='card-body'>
          <div className='d-flex justify-content-between align-items-center'>
            <p className='m-0'>
              Item Name for Price
            </p>
            <p className='card-text text-center'>
              Description
            </p>
          </div>
        </div>
      </div>
    </ClickableExternalCard>
  )
}

export default MockShopItemCard
