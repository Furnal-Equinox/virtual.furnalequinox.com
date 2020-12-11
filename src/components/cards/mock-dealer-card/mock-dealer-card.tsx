import React from 'react'
import './style.scss'

import ClickableInternalCard from '../clickable-internal-card/clickable-internal-card'

const MockDealerCard: React.FC = () => {
  return (
    <ClickableInternalCard slug={'.'}>
      <div className='card mb-5 shadow-sm'>
        <svg 
          className='bd-placeholder-img card-img-top' 
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
            Store Banner
          </text>
        </svg>
        <div className='card-body'>
          <div className='d-flex justify-content-between align-items-center'>
            <p className='m-0'>
              Store Name by Dealer
            </p>
            <p className='card-text text-center'>
              Description
            </p>
          </div>
        </div>
      </div>
    </ClickableInternalCard>
  )
}

export default MockDealerCard
