import React from 'react'
import {assets} from '../assets/assets'

const Banner = () => {
  return (
    <div className="px-4 py-32 bg-cover bg-center mx-auto" style={{ backgroundImage: `url(${assets.banner})` }}>
        <div className="text-white text-center">
            <h1 className="text-5xl lg:text-6xl leading-snug font-bold mt-5 mb-5 font-primary">
                Welcome to SkinScribe
            </h1>
            <p className="text-gray-100 lg:w-3/5 mx-auto mb-5 font-primary">
                Discover expert skincare advice, tips, and product reviews to help you glow from the inside out. 
                Start your skincare journey today with helpful insights and trusted recommendations.
            </p>

        </div>

    </div>

  )
}

export default Banner