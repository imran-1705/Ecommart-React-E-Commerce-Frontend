import React from 'react';
import { Link } from 'react-router-dom';

const ProductCard = ({ products = [] }) => {
  return (
    <section className="bg-gradient-to-br from-purple-50 via-white to-indigo-100 py-20">
      <div className="container mx-auto px-6 md:px-10 lg:px-16">
        <h2 className="text-3xl font-extrabold text-indigo-700 mb-10 text-center">Featured Products</h2>

        <div className="flex flex-wrap gap-6 justify-center">
          {products.map((product) => {
            const { id, title, price, category, image } = product;
            const isNew = id % 2 === 0;
            const isOnSale = id % 3 === 0;

            return (
              <div
                key={id}
                data-aos="fade-up"
                className="relative group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-5 w-full sm:w-[48%] md:w-[30%] lg:w-[23%] flex flex-col"
              >
                {/* Badge */}
                {isNew && (
                  <span className="absolute top-2 left-2 bg-green-500 text-white text-xs px-2 py-1 rounded-md shadow">
                    NEW
                  </span>
                )}
                {isOnSale && (
                  <span className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-md shadow">
                    SALE
                  </span>
                )}

                {/* Product Image */}
                <Link to={`/products/${id}`}>
                  <div className="relative h-48 flex justify-center items-center mb-4 bg-indigo-50 rounded-lg overflow-hidden">
                    <img
                      src={image}
                      alt={title}
                      className="object-contain h-full w-full transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </Link>

                {/* Product Info */}
                <div className="flex flex-col flex-grow">
                  <h3 className="text-xs uppercase tracking-widest text-indigo-500 font-semibold mb-1">{category}</h3>
                  <h2 className="text-gray-900 font-bold text-lg mb-2 line-clamp-2">{title}</h2>
                  <p className="text-indigo-700 font-semibold text-md">${price}</p>
                </div>

                {/* Add to Cart Button - Appears on Hover */}
                <button className="mt-4 py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Quick Add to Cart
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
