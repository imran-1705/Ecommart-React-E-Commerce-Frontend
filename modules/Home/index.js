import React, { useEffect, useState } from 'react'
import Categories from '../../components/Categories'
import FeatureCard from '../../components/FeatureCard'
import Hero from '../../components/Hero'
import ProductCard from '../../components/ProductCard'
import Products from '../../components/ProductCard'
import Stats from '../../components/StatCard'

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products?limit=12');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <>
      <Hero />
      <section className="py-16 bg-gradient-to-r from-purple-50 via-pink-50 to-indigo-50">
        <Categories />
      </section>

      <section className="text-center mt-20 mb-12 px-5 max-w-4xl mx-auto">
        <h2 className="text-indigo-600 tracking-widest font-semibold text-sm mb-2 uppercase">
          Products
        </h2>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          Most Popular Products
        </h1>
      </section>

      <section className="px-5 max-w-7xl mx-auto">
        {loading ? (
          <div className="flex justify-center py-20">
            <svg
              className="animate-spin -ml-1 mr-3 h-12 w-12 text-indigo-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8v8H4z"
              />
            </svg>
          </div>
        ) : (
          <ProductCard products={products} />
        )}
      </section>

      <section className="py-16 bg-indigo-50">
        <FeatureCard />
      </section>

      <section className="py-20 bg-gradient-to-r from-pink-50 via-purple-50 to-indigo-50">
        <Stats />
      </section>
    </>
  );
};

export default Home;
