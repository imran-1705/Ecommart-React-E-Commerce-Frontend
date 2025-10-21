import React from 'react'
import heroImg from '../../assets/heroImg.jpg'

const Hero = () => {
  return (
    <section className="text-gray-600 body-font mt-20">
      <div className="container mx-auto flex px-5 py-24 md:flex-row md:justify-center flex-col items-center">
         {/* Text Content */}
        <div className="md:w-1/2 flex flex-col items-start text-left space-y-6">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-indigo-800">
            Get the product now before
            <br className="hidden lg:inline-block" /> they get sold
          </h1>
          <p className="text-lg font-medium text-gray-700 leading-relaxed">
            Grab your favorite items before they're gone! Enjoy exclusive deals on our high-quality, handpicked products delivered to your door.
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition shadow">
              Show All Products
            </button>
            <button className="bg-white hover:bg-gray-100 text-indigo-700 font-semibold py-3 px-6 rounded-lg border border-indigo-200 transition shadow">
              Contact Us
            </button>  </div>
        </div>
       <div className="w-full max-w-5xl flex justify-end md:h-full h-full">
  <img
    className="w-[700px] h-full  flex justify-end object-bottom-right rounded "
    alt="hero"
    src={heroImg}
  />
</div>

      </div>
    </section>
  )
}

export default Hero