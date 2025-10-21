import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Cart = () => {
  const navigate = useNavigate()
  const [total, setTotal] = useState(0)
  const carts = JSON.parse(localStorage.getItem('cart')) || []

  useEffect(() => {
    const total = carts.reduce((acc, item) => acc + item.price * item.quantity, 0)
    setTotal(total)
  }, [carts])

  const handleInc = (id) => {
    const updatedCart = carts.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
    navigate('/cart')
  }

  const handleDec = (id) => {
    const updatedCart = carts.map(item => {
      if(item.id === id && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 }
      }
      return item
    })
    localStorage.setItem('cart', JSON.stringify(updatedCart))
    navigate('/cart')
  }

  const removeProduct = (id) => {
    const updatedCart = carts.filter(item => item.id !== id)
    localStorage.setItem('cart', JSON.stringify(updatedCart))
    navigate('/cart')
  }

  if(carts.length === 0) {
    return (
      <div className="h-[55vh] flex justify-center items-center text-4xl font-extrabold text-indigo-600 bg-indigo-50 rounded-lg shadow-lg mx-10">
        Your Cart is Empty 😞
      </div>
    )
  }

  return (
    <div className="container mx-auto mt-12 mb-24 px-4 md:px-10">
      <div className="flex flex-col md:flex-row shadow-xl rounded-lg overflow-hidden bg-gradient-to-br from-indigo-100 to-purple-100">
        
        {/* Cart Items Section */}
        <div className="md:w-3/4 bg-white p-8">
          <div className="flex justify-between border-b-2 border-indigo-300 pb-6 mb-8">
            <h1 className="text-3xl font-extrabold text-indigo-700">Shopping Cart</h1>
            <h2 className="text-xl font-semibold text-indigo-600">{carts.length} {carts.length === 1 ? 'Item' : 'Items'}</h2>
          </div>

          <div className="flex text-indigo-500 font-semibold text-xs uppercase tracking-wider mb-4">
            <div className="w-2/5">Product Details</div>
            <div className="w-1/5 text-center">Quantity</div>
            <div className="w-1/5 text-center">Price</div>
            <div className="w-1/5 text-center">Total</div>
          </div>

          {carts.map(cart => (
            <div
              key={cart.id}
              className="flex items-center py-4 px-3 rounded-lg hover:bg-indigo-50 transition cursor-pointer mb-4"
            >
              <div className="flex w-2/5 items-center">
                <img
                  className="h-24 w-24 rounded-lg object-contain border border-indigo-200 shadow-sm"
                  src={cart.image}
                  alt={cart.title}
                />
                <div className="ml-5">
                  <h3 className="text-lg font-semibold text-indigo-700">{cart.title}</h3>
                  <p className="text-indigo-400 capitalize text-sm mt-1">{cart.category}</p>
                  <button
                    onClick={() => removeProduct(cart.id)}
                    className="mt-3 text-red-600 hover:text-red-700 font-semibold text-xs"
                  >
                    Remove
                  </button>
                </div>
              </div>

              <div className="w-1/5 flex justify-center items-center">
                <button
                  onClick={() => handleDec(cart.id)}
                  className="p-1 rounded-full bg-indigo-200 hover:bg-indigo-300 text-indigo-700 transition"
                  aria-label="Decrease quantity"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </button>

                <input
                  type="text"
                  readOnly
                  value={cart.quantity}
                  className="mx-3 w-10 text-center font-semibold border border-indigo-300 rounded-md text-indigo-700 bg-indigo-50"
                />

                <button
                  onClick={() => handleInc(cart.id)}
                  className="p-1 rounded-full bg-indigo-200 hover:bg-indigo-300 text-indigo-700 transition"
                  aria-label="Increase quantity"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <line x1="12" y1="5" x2="12" y2="19" />
                    <line x1="5" y1="12" x2="19" y2="12" />
                  </svg>
                </button>
              </div>

              <div className="w-1/5 text-center font-semibold text-indigo-700">${cart.price.toFixed(2)}</div>
              <div className="w-1/5 text-center font-semibold text-indigo-900 text-lg">${(cart.price * cart.quantity).toFixed(2)}</div>
            </div>
          ))}

          <Link
            to="/products"
            className="inline-flex items-center mt-8 text-indigo-600 font-semibold hover:text-indigo-800"
          >
            <svg
              className="w-5 h-5 mr-2 transform rotate-180"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
            Continue Shopping
          </Link>
        </div>

        {/* Order Summary Section */}
        <div className="md:w-1/4 bg-indigo-50 p-8 rounded-tr-lg rounded-br-lg">
          <h2 className="text-2xl font-extrabold text-indigo-700 border-b-2 border-indigo-300 pb-6 mb-8">
            Order Summary
          </h2>

          <div className="flex justify-between text-indigo-700 font-semibold uppercase tracking-wide mb-6">
            <span>Items ({carts.length})</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <div className="mb-6">
            <label htmlFor="shipping" className="block mb-2 text-indigo-600 font-semibold uppercase text-sm">
              Shipping
            </label>
            <select
              id="shipping"
              className="w-full p-3 border border-indigo-300 rounded-md bg-white text-indigo-700 font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
              defaultValue="standard"
            >
              <option value="standard">Standard shipping - $10.00</option>
              <option value="express">Express shipping - $20.00</option>
              <option value="overnight">Overnight shipping - $30.00</option>
            </select>
          </div>

          <div className="mb-6">
            <label htmlFor="promo" className="block mb-2 text-indigo-600 font-semibold uppercase text-sm">
              Promo Code
            </label>
            <input
              type="text"
              id="promo"
              placeholder="Enter your code"
              className="w-full p-3 border border-indigo-300 rounded-md bg-white text-indigo-700 font-semibold shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
          </div>

          <button className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 rounded-lg mb-8 transition">
            Apply
          </button>

          <div className="border-t border-indigo-300 pt-6">
            <div className="flex justify-between text-indigo-900 font-extrabold text-xl uppercase mb-6">
              <span>Total cost</span>
              <span>${(total + 10).toFixed(2)}</span>
            </div>
            <button
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold py-4 rounded-lg transition"
              onClick={() => alert('Checkout functionality coming soon!')}
            >
              Checkout
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Cart
