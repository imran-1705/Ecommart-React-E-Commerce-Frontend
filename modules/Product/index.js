import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const Product = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [product, setProduct] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`)
        const data = await response.json()
        setProduct(data)
      } catch (err) {
        console.error('Error fetching product:', err)
      } finally {
        setLoading(false)
      }
    }
    fetchProduct()
  }, [id])

  const handleCart = (product, redirect) => {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    const existing = cart.find(item => item.id === product.id)

    if (existing) {
      const updatedCart = cart.map(item =>
        item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
      localStorage.setItem('cart', JSON.stringify(updatedCart))
    } else {
      localStorage.setItem('cart', JSON.stringify([...cart, { ...product, quantity: 1 }]))
    }

    alert('🎉 Product added to cart!')
    if (redirect) navigate('/cart')
  }

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-white text-indigo-600 text-lg font-semibold">
        Fetching product details...
      </div>
    )
  }

  return (
    <section className="text-gray-700 body-font overflow-hidden bg-gradient-to-br from-purple-50 to-indigo-100">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap bg-white rounded-lg shadow-lg p-6">
          <img
            alt={product?.title}
            className="lg:w-1/2 w-full h-96 object-contain object-center rounded"
            src={product?.image}
          />
          <div className="lg:w-1/2 w-full lg:pl-10 mt-6 lg:mt-0 flex flex-col justify-between">
            <div>
              <h2 className="text-sm uppercase tracking-widest text-indigo-500 font-bold mb-1">
                {product?.category}
              </h2>
              <h1 className="text-3xl font-bold text-gray-900 mb-3">{product?.title}</h1>
              <p className="leading-relaxed mb-4 text-gray-600">{product?.description}</p>
              <div className="flex items-center mb-4">
                <div className="flex items-center text-yellow-400 text-sm space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4" fill={i < 4 ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <span className="ml-2 text-gray-500 text-sm">(4 Reviews)</span>
              </div>
              <div className="flex items-center mb-4">
                <span className="mr-3 text-gray-700 font-medium">Color</span>
                <div className="flex space-x-2">
                  <button className="w-6 h-6 rounded-full border-2 border-gray-300 bg-red-500"></button>
                  <button className="w-6 h-6 rounded-full border-2 border-gray-300 bg-yellow-400"></button>
                  <button className="w-6 h-6 rounded-full border-2 border-gray-300 bg-indigo-500"></button>
                </div>
              </div>
              <div className="flex items-center mb-6">
                <span className="mr-3 text-gray-700 font-medium">Size</span>
                <select className="border border-gray-300 rounded-md py-1 px-3 focus:ring-indigo-500 focus:border-indigo-500 text-sm">
                  <option>SM</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
              </div>
            </div>
            <div className="flex items-center justify-between mt-6">
              <span className="text-2xl font-bold text-indigo-600">${product?.price}</span>
              <div className="flex space-x-3">
                <button
                  onClick={() => handleCart(product, true)}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-semibold py-2 px-4 rounded"
                >
                  Buy Now
                </button>
                <button
                  onClick={() => handleCart(product)}
                  className="border border-indigo-500 hover:bg-indigo-500 hover:text-white text-indigo-600 text-sm font-semibold py-2 px-4 rounded"
                >
                  Add to Cart
                </button>
              </div>
              <button className="ml-4 p-2 rounded-full bg-gray-100 hover:bg-red-100 text-red-500 transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78L12 21.23l7.78-7.78a5.5 5.5 0 000-7.78z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Product
