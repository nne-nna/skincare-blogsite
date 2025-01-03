import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaDribbble, FaFacebook, FaXmark, FaXTwitter } from 'react-icons/fa6';
import { FaSearch } from 'react-icons/fa';
import { useSearch } from './SearchContext';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { searchQuery, setSearchQuery } = useSearch();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { path: '/', link: 'Home' },
    { path: '/blogs', link: 'Blog' },
    { path: '/contact', link: 'Contact' },
  ];

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`${
        scrolled ? 'bg-white text-black shadow-lg' : 'bg-transparent text-white'
      } fixed top-0 left-0 right-0 font-primary z-50 transition-all duration-300`}
    >
      <nav className="px-4 py-4 max-w-7xl mx-auto flex justify-between items-center z-999">
        <a href="/" className="text-lg md:text-xl font-bold whitespace-nowrap">
          Skin<span className="text-[#3b4b41]">Scribe</span>
        </a>

        {/* Navigation items for larger screens */}
        <ul className="lg:flex gap-8 text-lg hidden">
          {navItems.map(({ path, link }) => (
            <li key={path}>
              <NavLink
                className={({ isActive, isPending }) =>
                  isActive ? 'active' : isPending ? 'pending' : ''
                }
                to={path}
              >
                {link}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Search Bar - now always visible */}
        <div className="hidden lg:flex items-center gap-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search blogs..."
              className={`w-80 px-4 py-2 rounded-[5px] border focus:outline-none focus:border-[#3b4b41]/80 placeholder-gray-300 
                  ${scrolled ? 'bg-white border-[#3b4b41]' : 'bg-[#5a6f65] bg-opacity-70 border-[#5a6f65]'}`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FaSearch
              className={`absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
                scrolled ? 'text-[#3b4b41]' : 'text-white' 
              }`}
            />
          </div>
        </div>

        {/* login button */}
        <div className="lg:flex items-center gap-4 hidden">
          <button
            className="px-6 py-2 font-medium rounded-[5px] hover:bg-white hover:text-[#3b4b41] transform hover:scale-105 transition-all duration-200 ease-in"
          >
            Sign Up
          </button>
          <button
            className="bg-[#3b4b41] text-white px-6 py-2 font-medium rounded-[5px]transform hover:scale-105 transition-all duration-200 ease-in"
          >
            Log In
          </button>
        </div>

        {/* Mobile search and menu */}
        <div className="lg:hidden flex items-center gap-2">
          {/* Mobile Search Bar */}
          <div className="relative w-32 sm:w-40">
            <input
              type="text"
              placeholder="Search..."
              className={`w-full px-2 py-1.5 rounded-[5px] border text-sm focus:outline-none focus:border-[#3b4b41]/80 placeholder-gray-300 
                  ${scrolled ? 'bg-white border-[#3b4b41]' : 'bg-[#5a6f65] bg-opacity-70 border-[#5a6f65]'}`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <FaSearch
              className={`absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 ${
                scrolled ? 'text-[#3b4b41]' : 'text-white'
              }`}
            />
          </div>

          {/* Hamburger menu button */}
          <button onClick={toggleMenu} className="cursor-pointer">
            {isMenuOpen ? <FaXmark className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu items */}
      <div>
        <ul
          className={`lg:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white ${
            isMenuOpen
              ? 'fixed top-0 left-0 w-full transition-all ease-out duration-150 shadow-lg'
              : 'hidden'
          }`}
        >
          {navItems.map(({ path, link }) => (
            <li key={path} className="text-black">
              <NavLink onClick={toggleMenu} to={path}>
                {link}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;


