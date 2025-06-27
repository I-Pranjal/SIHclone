import React from 'react';

export default function WhySIH() {
  const reasons = [
    {
      img: '/solution1.png',
      title: 'Innovative Solutions',
      desc: 'Get innovative solutions to your problems in cost-effective ways. Opportunity to be a part of nation building and brand your company.',
    },
    {
      img: '/solution2.png',
      title: 'Recognition and Visibility',
      desc: 'National recognition and visibility for your company across all premier institutions in India.',
    },
    {
      img: '/solution3.png',
      title: 'Out-of-the-box Solutions',
      desc: 'Talented youngsters from all over the country offer out-of-the-box solutions to your problems.',
    },
    {
      img: '/solution4.png',
      title: 'Innovation Movement Opportunity',
      desc: 'Be part of the world’s biggest open innovation movement. Opportunity to work with some of the best talents in the country.',
    },
  ];

  return (
    <div className="w-full px-4 py-10 bg-white" id="WhySIH-container">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-gray-800 mb-8 sm:mb-10 leading-snug">
        Why SIH is important for Government and Corporate Departments
      </h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4 max-w-6xl mx-auto">
        {reasons.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 p-4 sm:p-6 rounded-lg shadow hover:shadow-md transition-all duration-300 text-center flex flex-col items-center"
          >
            <img src={item.img} alt={item.title} className="w-14 h-14 sm:w-16 sm:h-16 mb-4" />
            <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">{item.title}</h3>
            <p className="text-sm sm:text-base text-gray-600">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
