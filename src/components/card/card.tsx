import React from 'react'
import { Link } from 'gatsby'

interface Props {
  path: string
  label: string
  primary: boolean
}

const Card: React.FC<Props> = ({ path, label, primary }: Props) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src="..." className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  )
}

export default Card
