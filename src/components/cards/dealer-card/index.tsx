import React from 'react'
import './style.scss'

import Link from '../../link'

export interface Dealer {
  title?: string | null | undefined
  dealer?: string | null | undefined
  description?: string | null | undefined
  banner?: string | null | undefined
  slug?: string | null | undefined
  isPremium?: boolean | null | undefined
}

type Props = Dealer

const DealerCard: React.FC<Props> = ({ title, dealer, description, banner, slug }: Props) => {
  const PlaceholderImage: React.FC = () =>
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

  return (
    <div className='card rounded-card mb-5 shadow-sm'>
      {banner !== undefined
        ? <img src={banner ?? ''} className='card-img-top rounded-card-img-top' />
        : <PlaceholderImage />}
      <div className='card-body'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <p className='card-title text-center h2'>
                {`${title ?? 'Store Name'} by ${dealer ?? 'Dealer'}`}
              </p>
            </div>
            <div className='col-lg-6'>
              <p className='card-text text-center'>
                {description ?? 'Description'}
              </p>
            </div>
          </div>
          <div className='row mt-3'>
            <Link to={`.${slug ?? ''}`} label='Go to their page' isFullwidth />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DealerCard
