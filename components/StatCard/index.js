import React from 'react';

const statsData = [
  {
    id: 1,
    title: '2.7K',
    label: 'Downloads',
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="w-12 h-12 mb-3 inline-block text-pink-500"
        viewBox="0 0 24 24"
      >
        <path d="M8 17l4 4 4-4m-4-5v9"></path>
        <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
      </svg>
    ),
  },
  {
    id: 2,
    title: '1.3K',
    label: 'Users',
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="w-12 h-12 mb-3 inline-block text-green-500"
        viewBox="0 0 24 24"
      >
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
      </svg>
    ),
  },
  {
    id: 3,
    title: '74',
    label: 'Files',
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="w-12 h-12 mb-3 inline-block text-yellow-500"
        viewBox="0 0 24 24"
      >
        <path d="M3 18v-6a9 9 0 0118 0v6"></path>
        <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
      </svg>
    ),
  },
  {
    id: 4,
    title: '46',
    label: 'Places',
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        className="w-12 h-12 mb-3 inline-block text-purple-500"
        viewBox="0 0 24 24"
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
      </svg>
    ),
  },
];

const Stats = () => {
  return (
    <section className="bg-gradient-to-r from-pink-50 via-purple-50 to-indigo-50 py-24">
      <div className="container px-5 mx-auto">
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Master Cleanse Reliac Heirloom
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them man bun deep jianbing selfies heirloom prism
            food truck ugh squid celiac humblebrag.
          </p>
        </div>

        <div className="flex flex-wrap -m-4 justify-center">
          {statsData.map(({ id, title, label, icon }) => (
            <div
              key={id}
              className="p-6 md:w-1/4 sm:w-1/2 w-full cursor-pointer"
            >
              <div className="border-4 border-transparent hover:border-gradient-to-r hover:border-pink-400 rounded-xl bg-white shadow-lg hover:shadow-xl p-8 transition duration-500 ease-in-out transform hover:-translate-y-2 text-center">
                {icon}
                <h2 className="text-4xl font-bold text-gray-900">{title}</h2>
                <p className="mt-2 text-lg font-semibold text-gray-700">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
