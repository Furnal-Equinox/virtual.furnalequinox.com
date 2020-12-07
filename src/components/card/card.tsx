import React from 'react'
import { Link } from 'gatsby'
import './style.scss'

interface Dealer {
  title: string
  dealer: string
  description: string
  banner: string
  slug: string
}

type Props = Dealer

const Card: React.FC<Props> = ({ title, dealer, description, banner, slug }: Props) => {
  return (
    <Link to={`.${slug}`}>
      <div className="card mb-5 shadow-sm">
        <img src={banner} className='card-img-top'></img>
        <div className="card-body">
          <p className="card-text text-center">
            {description}
          </p>
        </div>
      </div>
    </Link>
  )
}

export default Card
