import React from 'react';
import Banner from '../components/Banner';
import BlogPage from '../components/BlogPage';
import SkincareQuiz from '../components/SkincareQuiz';

const Home = () => {
  return (
    <div>
      <Banner />

      <div className="max-w-7xl mx-auto">
        <BlogPage numberOfBlogs={6} showSidebar={false} />
      </div>

      <SkincareQuiz />
    </div>
  );
};

export default Home;
