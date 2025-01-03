import React from 'react'
import { FaUser } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const BlogCards = ({blogs = [], currentPage, selectedCategory, pageSize}) => {

    // Ensure blogs is an array
    const blogsArray = Array.isArray(blogs) ? blogs : [];

    const filteredBlogs = blogsArray
        .filter((blog) => !selectedCategory || blog.category === selectedCategory)
        .slice((currentPage -1) * pageSize, currentPage * pageSize);
    
    console.log('Filtered blogs:', filteredBlogs);

    return (
        <div className='grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8'>
          {
            filteredBlogs.map((blog) => (
              <Link to={`/blogs/${blog.id}`} key={blog.id} className='flex flex-col h-full p-5 shadow-lg rounded cursor-pointer'>
                <div className='aspect-video w-full overflow-hidden rounded-lg'>
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className='w-full h-full object-cover'
                  />
                </div>
                <div className='flex flex-col flex-grow'>
                  <h3 className='mt-4 mb-2 font-bold hover:text-blue-600 cursor-pointer'>{blog.title}</h3>
                  <p className='mb-2 text-gray-600'>
                    <FaUser className='inline-flex items-center mr-2' />
                    {blog.author}
                  </p>
                  <p className='text-sm text-gray-500 mt-auto'>Published: {blog.published_date}</p>
                </div>
              </Link>
            ))
          }
        </div>
      )
}
export default BlogCards