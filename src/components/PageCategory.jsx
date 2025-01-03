import React, { useState, useRef, useEffect } from 'react';

const PageCategory = ({ onSelectCategory, activeCategory }) => {
  const categories = ["Skin Types", "Routines", "Ingredients", "Remedies", "Trends"];
  const [scrollPosition, setScrollPosition] = useState(0);
  const scrollRef = useRef(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const position = scrollRef.current.scrollLeft / (scrollRef.current.scrollWidth - scrollRef.current.clientWidth);
      setScrollPosition(position);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div className="w-full mb-8 bg-gray-50/50 rounded-xl p-3">
      <div 
        ref={scrollRef}
        className="overflow-x-auto hide-scrollbar"
      >
        <div className="flex items-center gap-2 md:gap-3 min-w-min pb-2">
          <button
            onClick={() => onSelectCategory(null)}
            className={`px-4 py-2.5 rounded-lg font-medium text-base whitespace-nowrap transition-all duration-200
              ${!activeCategory 
                ? "bg-[#3b4b41] text-white shadow-sm" 
                : "text-gray-600 hover:bg-white hover:shadow-sm"
              }`}
          >
            All
          </button>

          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className={`px-4 py-2.5 rounded-lg font-medium text-base whitespace-nowrap transition-all duration-200
                ${activeCategory === category 
                  ? "bg-[#3b4b41] text-white shadow-sm" 
                  : "text-gray-600 hover:bg-white hover:shadow-sm"
                }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      
      {/* Scroll Dots Indicator - Mobile Only */}
      <div className="flex justify-center gap-1.5 mt-2 md:hidden">
        {[...Array(3)].map((_, index) => (
          <div
            key={index}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              index === Math.floor(scrollPosition * 2) 
                ? "w-4 bg-[#3b4b41]" 
                : "w-1.5 bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default PageCategory;