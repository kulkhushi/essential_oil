import React from 'react'

const loading = () => {
  return (
    <div className="flex items-center justify-center w-full h-full bg-white fixed top-0 left-0 z-50">
      <div className="loader"></div>
    </div>
  )
}

export default loading