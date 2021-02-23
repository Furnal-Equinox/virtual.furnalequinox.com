import React from 'react'

const TextCard: React.FC = ({ children }) => {
  return (
    <div className='card border border-primary border-5 h-100'>
      <div className='card-body'>
        <div className='container text-center p-1'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default TextCard
