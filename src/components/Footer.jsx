import React from 'react'
import { FaFacebook, FaInstagram, FaXTwitter } from 'react-icons/fa6'

const Footer = () => {
  return (
    <div className='bg-[#3b4b41]'>
      <div className='px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4 '>
          <div className='grid mb-8 lg:grid-cols-6 gap-10'>
            <div className='grid -cols-2 gap-4 lg:col-span-4 md:grid-cols-4'>
              <div><p className='font-medium tracking-wide text-gray-300'>Quick Links</p>
                <ul className='mt-2 space-y-2'>
                  <li>
                    <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-[#e79f51] '>Home</a>
                  </li>
                  <li>
                    <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-[#e79f51]'>Blog</a>
                  </li>
                  <li>
                    <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-[#e79f51]'>Contact</a>
                  </li>
                </ul>
              </div>

              {/* Category 2 */}
              <div>
                <p className='font-medium tracking-wide text-gray-300'>Services</p>
                <ul className='mt-2 space-y-2'>
                  <li>
                    <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-[#e79f51]'>Tips</a>
                  </li>
                  <li>
                    <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-[#e79f51]'>Recommendations</a>
                  </li>
                  <li>
                    <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-[#e79f51]'>Tips</a>
                  </li>
                  <li>
                    <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-[#e79f51]'>Consultations</a>
                  </li>
                </ul>
              </div>

              {/* Category 3 */}
              <div>
                <p className='font-medium tracking-wide text-gray-300'>Connect</p>
                <ul className='mt-2 space-y-2'>
                  <li>
                    <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-[#e79f51]'>Facebook</a>
                  </li>
                  <li>
                    <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-[#e79f51]'>Instagram</a>
                  </li>
                  <li>
                    <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-[#e79f51]'>X</a>
                  </li>
                </ul>
              </div>

              {/* Category 4 */}
              <div>
                <p className='font-medium tracking-wide text-gray-300'>Legal</p>
                <ul className='mt-2 space-y-2'>
                  <li>
                    <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-[#e79f51]'>Terms and Conditions</a>
                  </li>
                  <li>
                    <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-[#e79f51]'>Privacy policy</a>
                  </li>
                  <li>
                    <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-[#e79f51]'>Cookie Policy</a>
                  </li>
                  <li>
                    <a href='/' className='text-gray-500 transition-colors duration-300 hover:text-[#e79f51]'>Refunds and Return Policy</a>
                  </li>
                </ul>
              </div>      

            </div>

            {/* subscription */}
            <div className='md:max-w-md lg:col-span-2 lg:mt-0 mt-5'>
                <p className='font-medium tracking-wide text-gray-300'>Subscribe for Updates</p>
                <form className='mt-4 flex flex-col md:flex-row'>
                  <input type="email" name='email' id='email' placeholder='Email Address' className='flex-grow w-full h-12 px-4 mb-3 transition duration-200
                   bg-white border border-gray-300 rounded shadow-sm aspect-auto md:mr-2 md:mb-0 focus:border-purple-400 
                   focus:outline-none'/>
                   <button type='submit' className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md hover:scale-105 focus:outline-none border'>
                      Subscribe
                   </button>
                </form>
                <p className='mt-4 text-sm text-gray-500'>
                  Stay in the loop with the latest skincare tips, product recommendations, and exclusive offers! We promise to keep things fresh, fun, and fabulous—just like your skin. 
                  Sign up now and let's glow together.
                </p>
            </div>
          </div>

          <div className='flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row'>
            <p className='text-sm text-gray-500'>© Copyright 2024 | All right reserved</p>
            <div className='flex items-center mt-4 space-x-4 sm:mt-0'> 
              <a href='' className='text-gray-500 transition-all duration-300 hover:text-[#e79f51] hover:scale-125'>
                <button><FaXTwitter className='h-6 w-6'/></button>
              </a>
              <a href='' className='text-gray-500 transition-all duration-300 hover:text-[#e79f51] hover:scale-125'>
                <button><FaInstagram className='h-6 w-6'/></button>
              </a>
              <a href='' className='text-gray-500 transition-all duration-300 hover:text-[#e79f51] hover:scale-125'>
                <button><FaFacebook className='h-6 w-6'/></button>
              </a>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Footer