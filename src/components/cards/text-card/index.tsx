import React from 'react'

const TextCard: React.FC = ({ children }) => {
  return (
    <div className='card border border-primary border-5 mb-5'>
      <div className='card-body'>
        {children}
      </div>
    </div>
  )
}

export default TextCard
