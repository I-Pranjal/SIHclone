import React from 'react';

export default function Milestone() {
  return (
    <div className="w-full px-4 py-20 bg-blue-950 mt-4 " >
      <p className="text-center text-xl sm:text-2xl font-semibold mb-6">SIH MILESTONES</p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 text-center">
        <div>
          <p className="text-[42px] font-bold leading-tight m-0 p-0">8,98,884</p>
          <p className="text-sm sm:text-base">Participating Students</p>
        </div>
        <div>
          <p className="text-[42px] font-bold leading-tight m-0 p-0">6000+</p>
          <p className="text-sm sm:text-base">SIH Alumni Network</p>
        </div>
        <div>
          <p className="text-[42px] font-bold leading-tight m-0 p-0">3897</p>
          <p className="text-sm sm:text-base">Participating Institutes</p>
        </div>
        <div>
          <p className="text-[42px] font-bold leading-tight m-0 p-0">2633</p>
          <p className="text-sm sm:text-base">Total Problem Statements</p>
        </div>
        <div>
          <p className="text-[42px] font-bold leading-tight m-0 p-0">100+</p>
          <p className="text-sm sm:text-base">Registered Startups</p>
        </div>
      </div>
    </div>
  );
}
