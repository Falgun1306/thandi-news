import React from 'react'

const Wrapper = ({children, className = ''}) => {
  return (
    <div className={`max-w-6xl mx-auto px-4 sm:px-6 ${className}`}>
      {children}
    </div>
  )
}

export default Wrapper
