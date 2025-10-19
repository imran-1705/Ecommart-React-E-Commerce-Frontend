import React from 'react'
import { Link } from 'react-router-dom'

const colors = [
  'bg-gradient-to-r from-pink-400 via-red-400 to-yellow-400',
  'bg-gradient-to-r from-green-400 via-blue-500 to-purple-600',
  'bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500',
]

const icons = [
  <svg
    key="icon1"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    className="w-6 h-6"
    viewBox="0 0 24 24"
  >
    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
  </svg>,
  <svg
    key="icon2"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    className="w-6 h-6"
    viewBox="0 0 24 24"
  >
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M2 12h20"></path>
  </svg>,
  <svg
    key="icon3"
    fill="none"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    className="w-6 h-6"
    viewBox="0 0 24 24"
  >
    <path d="M4 4h16v16H4z"></path>
    <path d="M4 12h16"></path>
  </svg>,
]

const FeatureCard = ({ cards = ['Fashion', 'Electronics', 'Home Decor'] }) => {
  return (
    <section className="text-gray-700 body-font bg-gradient-to-b from-indigo-50 to-white py-24">
      <div className="container px-5 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h2 className="text-indigo-600 tracking-widest font-extrabold text-sm sm:text-md mb-2">
            CATEGORIES
          </h2>
          <h1 className="sm:text-4xl text-3xl font-extrabold title-font text-gray-900">
            Our Popular Categories
          </h1>
        </div>
        <div className="flex flex-wrap -m-6">
          {cards.map((card, idx) => (
            <Link
              to={`/categories/${card.toLowerCase()}`}
              key={idx}
              className="p-6 md:w-1/3 cursor-pointer transform transition-transform duration-300 hover:scale-105"
            >
              <div
                className={`flex flex-col h-full rounded-3xl shadow-lg overflow-hidden ${colors[idx % colors.length]} text-white p-10`}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-white bg-opacity-30 flex items-center justify-center mr-5">
                    {icons[idx % icons.length]}
                  </div>
                  <h2 className="text-2xl font-semibold capitalize">{card}</h2>
                </div>
                <p className="flex-grow leading-relaxed text-white/90 mb-8">
                  Discover exclusive deals and top picks in <strong>{card}</strong> — trendy styles,
                  quality products, and the latest arrivals.
                </p>
                <span className="inline-flex items-center text-white font-semibold bg-white bg-opacity-25 px-5 py-2 rounded-full hover:bg-opacity-40 transition-colors duration-300">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureCard
