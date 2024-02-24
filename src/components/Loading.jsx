import React from 'react'
import loader from '../assets/loader.gif'

const Loading = () => {
  return (
    <div className="flex items-center justify-center">
        <div >
              <img src={loader} alt="Loading..." className='w-4/5' />
        </div>
    </div>
  )
}

export default Loading