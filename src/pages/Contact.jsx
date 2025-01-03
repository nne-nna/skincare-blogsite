import React from 'react'
import ContactForm from '../components/ContactForm';  
import ContactDetails from '../components/ContactDetails'; 
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      <div className="px-4 py-32 bg-cover bg-center mx-auto" style={{ backgroundImage: `url(${assets.banner})` }} >
      <div className='text-white text-center mt-10 mb-8'>
         <h2 className='text-5xl lg:text-5xl leading-snug font-bold mb-5 font-primary'>Contact Us</h2>
      </div>
    </div>
    <ContactForm />
    <ContactDetails />
    </div>
    
  )
}

export default Contact