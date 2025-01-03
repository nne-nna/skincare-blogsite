import React from 'react'
import { assets } from '../assets/assets'

const Services = () => {
  return (
    <div className="px-4 py-32 bg-cover bg-center mx-auto" style={{ backgroundImage: `url(${assets.banner})` }} >
      <div className='text-white text-center'>
         <h2 className='text-5xl lg:text-7xl leading-snug font-bold mb-5'>Services Page</h2>
      </div>
    </div>
  )
}

export default Services