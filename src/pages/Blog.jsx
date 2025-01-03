import React from 'react'
import BlogPage from '../components/BlogPage'
import { assets } from '../assets/assets'

const Blog = () => {
  return (
    <div>
      <div className="px-4 py-32 bg-cover bg-center mx-auto" style={{ backgroundImage: `url(${assets.banner})` }} >
        <div className='text-white text-center mt-10 mb-8'>
           <h2 className='text-5xl lg:text-5xl leading-snug font-bold mb-5 font-primary '>Discover Our stories</h2>
        </div>
      </div>

      {/* all blogs container */}
      <div className='max-w-7xl mx-auto'>
        <BlogPage />
      </div>
    </div>
  )
}

export default Blog