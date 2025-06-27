import React from 'react';

const resultItems = [
  { title: 'See result for the SIH - Batch 1', gif: '/new.gif' },
  { title: 'See result for the SIH - Batch 2', gif: '/new.gif' },
  { title: 'See result for the SIH - Batch 3', gif: '/new.gif' },
  { title: 'Nodal Center List for SIH 2024', gif: '/new.gif' }
];

const Results = () => {
  return (
    <div className="w-full px-4 py-6 bg-gray-50">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
        {resultItems.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-4 flex items-center justify-between hover:shadow-lg transition-all"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.gif}
                alt="New"
                className="w-8 h-8 object-contain"
              />
              <p className="text-gray-800 font-medium text-sm sm:text-base">{item.title}</p>
            </div>
            <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 text-sm font-semibold">
              <img
                src="/eye-open.png"
                alt="View"
                className="w-5 h-5 object-contain"
              />
              View
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Results;
