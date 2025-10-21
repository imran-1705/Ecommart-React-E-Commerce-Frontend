import React from 'react'
import { Link } from 'react-router-dom'

const navigations = [
  { name: 'HOME', path: '/' },
  { name: 'PRODUCTS', path: '/products' },
  { name: 'ABOUT', path: '/about' },
  { name: 'CONTACT', path: '/contact' }
]

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md">
      <div className="container mx-auto flex flex-wrap p-4 flex-col md:flex-row items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="flex items-center mb-4 md:mb-0">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            stroke="currentColor" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            className="w-10 h-10 text-white p-2 bg-white bg-opacity-20 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
          </svg>
          <span className="ml-3 text-3xl font-extrabold tracking-wide">EcomMart</span>
        </Link>

        {/* Navigation */}
        <nav className="flex flex-wrap items-center justify-center space-x-6 text-lg font-semibold">
          {navigations.map((nav) => (
            <Link
              key={nav.path}
              to={nav.path}
              className="transition duration-300 hover:text-yellow-300"
            >
              {nav.name}
            </Link>
          ))}
        </nav>

        {/* Cart Button */}
        <Link
          to="/cart"
          className="mt-4 md:mt-0 inline-flex items-center bg-yellow-300 text-indigo-900 font-semibold px-5 py-2 rounded-full shadow hover:bg-yellow-300 transition"
        >
          Go to Cart
          <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-4 h-4 ml-2"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </header>
  )
}

export default Header
