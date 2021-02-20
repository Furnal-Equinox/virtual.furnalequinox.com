import React from 'react'

import Link from '../../link'
import { PlaceholderImage } from '../../placeholders'

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
  return (
    <div className='card rounded-3 border border-primary border-5 mb-5'>
      {banner !== undefined
        ? <img src={banner ?? ''} className='card-img-top' />
        : <PlaceholderImage/>}
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
