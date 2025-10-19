import React from 'react'

const About = () => {
  return (
    <section className="text-gray-700 body-font bg-gradient-to-b from-indigo-50 to-white py-24 min-h-screen">
      <div className="container px-5 mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-16">
          <h1 className="sm:text-4xl text-3xl font-extrabold title-font mb-6 text-indigo-700">
            About EcomMart
          </h1>
          <p className="leading-relaxed text-lg text-gray-800 mb-6">
            At <strong>EcomMart</strong>, we believe shopping should be a delightful experience. We
            connect you with the best products across fashion, electronics, home decor, and more,
            curated just for you. Our mission is to provide quality, value, and exceptional customer
            service all in one place.
          </p>
          <p className="leading-relaxed text-lg text-gray-800 mb-6">
            Founded in 2020, our platform is dedicated to innovation and sustainability. We
            continually update our collection to keep up with the latest trends and eco-friendly
            solutions, so you can shop consciously and confidently.
          </p>
          <p className="leading-relaxed text-lg text-gray-800 font-semibold">
            Join us in making shopping smarter, simpler, and more colorful.
          </p>
        </div>
        <div className="md:w-1/2 mt-10 md:mt-0 flex justify-center">
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=600&q=80"
            alt="About Us"
            className="rounded-3xl shadow-lg max-w-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default About
