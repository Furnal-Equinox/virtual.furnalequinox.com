import React from 'react'
import './style.scss'

import Link from '../../link/link'

interface Dealer {
  title: string
  dealer: string
  description: string
  banner: string
  slug: string
}

type Props = Dealer

const DealerCard: React.FC<Props> = ({ title, dealer, description, banner, slug }: Props) => {
  return (
    <div className='card rounded-card mb-5 shadow-sm'>
      <img src={banner} className='card-img-top rounded-card-img-top'></img>
      <div className='card-body'>
        <div className='d-flex justify-content-between align-items-center'>
          <p className='m-0'>
            {`${title} by ${dealer}`}  
          </p>
          <p className='card-text text-center'>
            {description}
          </p>
          <Link to={`.${slug}`} label='Go' />
        </div>
      </div>
    </div>
  )
}

export default DealerCard
