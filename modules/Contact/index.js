import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Thank you for contacting us, ${formData.name}! We will get back to you soon.`)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section className="text-gray-700 body-font bg-gradient-to-b from-indigo-50 to-white py-24 min-h-screen">
      <div className="container px-5 mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 md:pr-16 mb-10 md:mb-0">
          <h1 className="sm:text-4xl text-3xl font-extrabold title-font mb-6 text-indigo-700">
            Get in Touch
          </h1>
          <p className="leading-relaxed text-lg text-gray-800 mb-6">
            Have questions? Need support? We're here to help! Reach out to us via the form or through
            our social media channels. Your satisfaction is our priority.
          </p>
          <p className="text-gray-600">
            <strong>Email:</strong> support@ecommart.com <br />
            <strong>Phone:</strong> +1 (555) 123-4567 <br />
            <strong>Address:</strong> 123 Ecom Street, Shop City, USA
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="md:w-1/2 bg-white rounded-3xl shadow-lg p-8 w-full"
          noValidate
        >
          <div className="relative mb-6">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600 font-semibold">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-indigo-50 rounded border border-indigo-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 text-base outline-none text-gray-900 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="relative mb-6">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600 font-semibold">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-indigo-50 rounded border border-indigo-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 text-base outline-none text-gray-900 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="relative mb-6">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600 font-semibold">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-indigo-50 rounded border border-indigo-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-300 h-32 text-base outline-none text-gray-900 py-2 px-4 resize-none leading-6 transition-colors duration-200 ease-in-out"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-300 font-bold rounded-full text-lg px-8 py-3 inline-flex items-center transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact
