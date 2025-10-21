import React, { useEffect, useState } from 'react'
import Categories from '../../components/Categories'
import ProductCard from '../../components/ProductCard'

const Products = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        setProducts(data)
      } catch (error) {
        console.error('Failed to fetch products:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchProducts()
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 via-white to-indigo-50 pb-16">
      <Categories />

      <div className="flex flex-col items-center text-center mt-24 mb-12 px-4 md:px-0">
        <h2 className="text-indigo-600 tracking-widest font-extrabold uppercase mb-2 text-sm md:text-base">
          PRODUCTS
        </h2>
        <h1 className="sm:text-4xl text-3xl font-extrabold text-indigo-900 drop-shadow-md">
          All Products
        </h1>
        <p className="mt-3 max-w-xl text-indigo-700 text-sm md:text-base">
          Browse through our diverse range of products, handpicked for quality and style.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {loading ? (
          <div className="flex justify-center items-center text-indigo-600 text-lg font-semibold h-40">
            Loading Products...
          </div>
        ) : (
          <ProductCard products={products} />
        )}
      </div>
    </div>
  )
}

export default Products
