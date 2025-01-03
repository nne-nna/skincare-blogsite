import React from 'react'
import { FaClock, FaUser } from 'react-icons/fa6';
import { useLoaderData } from 'react-router-dom'
import SideBar from '../components/SideBar';
import { assets } from '../assets/assets';

const SingleBlog = () => {
    const data = useLoaderData();
    const {title, image, category, author, published_date, reading_time, content} = data;

  return (
    <div>
        <div className="px-4 py-32 bg-cover bg-center mx-auto" style={{ backgroundImage: `url(${assets.banner})` }} >
            <div className='text-white text-center'>
               <h2 className='text-5xl lg:text-5xl leading-snug font-bold mb-5'>Article Details</h2>
            </div>
        </div>
        {/* Blog details */}
        <div className='max-w-7xl mx-auto my-12 flex flex-col md:flex-row gap-12 px-4 lg:px-0'>
            <div className='lg:w-3/4 mx-auto'>
                <div>
                    <img src={image} alt='' className='w-full mx-auto rounded' />
                </div>
                <h2 className='text-3xl mt-8 font-bold mb-4 text-[#3b4b41] cursor-pointer'>{title}</h2>
                <p className='mb-3 text-gray-600'> <FaUser className='inline-flex items-center mr-2' />{author} | {published_date}</p>
                <p className='mb-3 text-gray-600'> <FaClock className='inline-flex items-center mr-2'/>{reading_time}</p>
                <p className='text-base text-gray-500 mb-6'>{content}</p>
                <div className='text-base text-gray-500 mb-6'>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, ut sed repellendus illo eos 
                        voluptatibus animi incidunt commodi! Accusantium quas, reprehenderit dolore soluta ratione 
                        earum? Nulla reprehenderit quidem ducimus facere.
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ipsam recusandae officiis, 
                        quae eaque rem minus maxime corrupti quibusdam veniam! Repellat, nisi corrupti. Ipsam, odit.
                        Doloribus recusandae voluptates minus doloremque!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia nostrum asperiores voluptates enim quibusdam similique iste, 
                        animi magnam incidunt ducimus repudiandae accusamus est quis voluptatem? Tenetur sit beatae distinctio ea?
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, ut sed repellendus illo eos 
                        voluptatibus animi incidunt commodi! Accusantium quas, reprehenderit dolore soluta ratione 
                        earum? Nulla reprehenderit quidem ducimus facere.
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ipsam recusandae officiis, 
                        quae eaque rem minus maxime corrupti quibusdam veniam! Repellat, nisi corrupti. Ipsam, odit.
                        Doloribus recusandae voluptates minus doloremque!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia nostrum asperiores voluptates enim quibusdam similique iste, 
                        animi magnam incidunt ducimus repudiandae accusamus est quis voluptatem? Tenetur sit beatae distinctio ea?
                    </p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ipsam recusandae officiis, 
                        quae eaque rem minus maxime corrupti quibusdam veniam! Repellat, nisi corrupti. Ipsam, odit.
                        Doloribus recusandae voluptates minus doloremque!
                    </p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia nostrum asperiores voluptates enim quibusdam similique iste, 
                        animi magnam incidunt ducimus repudiandae accusamus est quis voluptatem? Tenetur sit beatae distinctio ea?
                    </p>
                </div>
            </div>    
            <div className='lg:w-1/2'>
                <SideBar />
            </div>      
        </div>
    </div>
  )
}

export default SingleBlog
