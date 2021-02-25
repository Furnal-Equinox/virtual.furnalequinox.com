import React from 'react'

export interface Props {
  title: string
  subtitle: string
}

const Jumbotron: React.FC<Props> = ({ title, subtitle }: Props) => {
  return (
    <section className='container-fluid py-3 py-lg-5 bg-light text-center'>
      <div className='col-lg-6 col-md-8 mx-auto'>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>
  )
}

export default Jumbotron
