import React from 'react';

const Footer = () => {
  return (
    <footer className="text-gray-700 bg-gradient-to-r from-indigo-700 via-purple-700 to-pink-600">
      <div className="container px-5 py-16 mx-auto flex md:items-start md:flex-row flex-col">
        {/* Brand & Description */}
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left mb-10 md:mb-0">
          <a className="flex title-font font-extrabold items-center justify-center md:justify-start text-white mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-12 h-12 p-2 bg-white rounded-full text-pink-600"
              viewBox="0 0 24 24"
            >
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-3xl">EcomMart</span>
          </a>
          <p className="text-indigo-200 leading-relaxed">
            Your one-stop shop for exclusive deals on fashion, electronics, home decor, and more. Quality products delivered fast & secure.
          </p>
        </div>

        {/* Links Sections */}
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 text-center md:text-left">
          {/* Products */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-8 md:mb-0">
            <h2 className="title-font font-semibold text-white tracking-widest text-sm mb-4">PRODUCTS</h2>
            <nav className="list-none space-y-3">
              <li>
                <a href="#" className="text-indigo-300 hover:text-white transition-colors duration-300">New Arrivals</a>
              </li>
              <li>
                <a href="#" className="text-indigo-300 hover:text-white transition-colors duration-300">Best Sellers</a>
              </li>
              <li>
                <a href="#" className="text-indigo-300 hover:text-white transition-colors duration-300">Discounts</a>
              </li>
              <li>
                <a href="#" className="text-indigo-300 hover:text-white transition-colors duration-300">Gift Cards</a>
              </li>
            </nav>
          </div>

          {/* Support */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-8 md:mb-0">
            <h2 className="title-font font-semibold text-white tracking-widest text-sm mb-4">SUPPORT</h2>
            <nav className="list-none space-y-3">
              <li>
                <a href="#" className="text-indigo-300 hover:text-white transition-colors duration-300">Help Center</a>
              </li>
              <li>
                <a href="#" className="text-indigo-300 hover:text-white transition-colors duration-300">Returns</a>
              </li>
              <li>
                <a href="#" className="text-indigo-300 hover:text-white transition-colors duration-300">Shipping</a>
              </li>
              <li>
                <a href="#" className="text-indigo-300 hover:text-white transition-colors duration-300">FAQs</a>
              </li>
            </nav>
          </div>

          {/* Company */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4 mb-8 md:mb-0">
            <h2 className="title-font font-semibold text-white tracking-widest text-sm mb-4">COMPANY</h2>
            <nav className="list-none space-y-3">
              <li>
                <a href="#" className="text-indigo-300 hover:text-white transition-colors duration-300">About Us</a>
              </li>
              <li>
                <a href="#" className="text-indigo-300 hover:text-white transition-colors duration-300">Careers</a>
              </li>
              <li>
                <a href="#" className="text-indigo-300 hover:text-white transition-colors duration-300">Press</a>
              </li>
              <li>
                <a href="#" className="text-indigo-300 hover:text-white transition-colors duration-300">Blog</a>
              </li>
            </nav>
          </div>

          {/* Legal */}
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-semibold text-white tracking-widest text-sm mb-4">LEGAL</h2>
            <nav className="list-none space-y-3">
              <li>
                <a href="#" className="text-indigo-300 hover:text-white transition-colors duration-300">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="text-indigo-300 hover:text-white transition-colors duration-300">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-indigo-300 hover:text-white transition-colors duration-300">Cookie Policy</a>
              </li>
              <li>
                <a href="#" className="text-indigo-300 hover:text-white transition-colors duration-300">Accessibility</a>
              </li>
            </nav>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-indigo-900">
        <div className="container mx-auto py-6 px-5 flex flex-wrap flex-col sm:flex-row items-center justify-between">
          <p className="text-indigo-300 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} EcomMart — Made with 💜 by{' '}
            <a
              href="https://twitter.com/knyttneve"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 hover:text-pink-600 font-semibold transition-colors duration-300"
            >
              Imran Mirza
            </a>
          </p>

          <span className="inline-flex mt-4 sm:mt-0 space-x-6 justify-center sm:justify-start">
            <a href="#" className="text-indigo-300 hover:text-pink-400 transition-colors duration-300">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a href="#" className="text-indigo-300 hover:text-pink-400 transition-colors duration-300">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>
            </a>
            <a href="#" className="text-indigo-300 hover:text-pink-400 transition-colors duration-300">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
              </svg>
            </a>
            <a href="#" className="text-indigo-300 hover:text-pink-400 transition-colors duration-300">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
