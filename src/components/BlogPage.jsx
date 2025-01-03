import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogCards from './BlogCards';
import PaginationPage from './PaginationPage';
import PageCategory from './PageCategory';
import SideBar from './SideBar';
import { useSearch } from './SearchContext';

const BlogPage = ({ numberOfBlogs = 12, showSidebar = true }) => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [loading, setLoading] = useState(false);
  const { searchBlogs } = useSearch();

  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      try {
        const response = await axios.get('/blogsData.json');
        console.log('API Response:', response.data); 
        
        if (Array.isArray(response.data)) {
          setBlogs(response.data);
        } else {
          console.error('Received non-array data:', response.data);
          setBlogs([]);
        }
      } catch (error) {
        console.error('Error fetching blogs:', error);
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
}, [currentPage, numberOfBlogs, selectedCategory]);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setActiveCategory(category);
  };

  const filteredBlogs = searchBlogs(blogs);

  return (
    <div className="px-4 sm:px-6 lg:px-8 pb-12">
      <div className="mb-8">
        <PageCategory
          onSelectCategory={handleCategoryChange}
          selectedCategory={selectedCategory}
          activeCategory={activeCategory}
        />
      </div>

      {loading ? (
        <div className="text-center text-gray-500 text-lg">
          Loading blogs, please wait...
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1">
            {filteredBlogs.length > 0 ? (
              <BlogCards
                blogs={filteredBlogs}
                currentPage={currentPage}
                selectedCategory={selectedCategory}
                pageSize={numberOfBlogs}
              />
            ) : (
              <div className="text-center text-gray-500 text-lg">
                Sorry, we couldn't find any blogs matching your search. Try using different keywords or explore our latest blogs!
              </div>
            )}
          </div>

          {showSidebar && (
            <div className="lg:w-1/4 min-w-[300px]">
              <SideBar />
            </div>
          )}
        </div>
      )}

      {numberOfBlogs > 6 && (
        <div className="mt-16">
          <PaginationPage
            onPageChange={handlePageChange}
            currentPage={currentPage}
            blogs={blogs}
            pageSize={numberOfBlogs}
          />
        </div>
      )}
    </div>
  );
};

export default BlogPage;
