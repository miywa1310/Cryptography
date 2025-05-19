import React from 'react'

const Content = ({children}) => {
  return (
    <div className='sm:p-[10%] md:p-0 min-h-[calc(100vh-140px)] max-h-[calc(100vh-140px)] overflow-y-auto'>{children}</div>
  )
}

export default Content