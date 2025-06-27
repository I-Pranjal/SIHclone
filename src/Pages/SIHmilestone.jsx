import React from 'react';
import { guidelinePoints, milestoneImportant } from '../assets/data';

export default function Milestone() {
  return (
    <div className="w-full px-4 py-10 max-w-6xl mx-auto">
      {/* Top image */}
      <img
        src="/implementation-image.png"
        alt="Implementation"
        className="w-full h-auto mb-8 rounded-lg"
      />

      {/* Heading */}
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-6">
        Guidelines for Deployment of Smart India Hackathon (SIH2024) Winning Projects
      </h1>

      {/* Main Paragraph */}
      <p className="text-gray-700 text-sm sm:text-base mb-6 leading-relaxed">
        The Smart India Hackathon (SIH) is envisioned to promote innovation and out-of-the-box
        thinking among young minds and aims to institutionalize a model for harnessing the creativity
        and technical expertise of millions of Indian students for the direct benefit of our nation.
        <br /><br />
        Through the Smart India Hackathon 2024 (SIH2024), the Ministry of Education’s Innovation Cell (MIC)
        tried to crowdsource solutions for improving governance and quality of life and provide young citizens
        with an opportunity to co-create and present innovative solutions to India's pressing needs.
        <br /><br />
        Post SIH, the Ministry of Education is committed to the further development, implementation, and deployment
        of SIH-winning ideas by effectively supporting the concerned ministries/departments. Hence, to initiate
        the development and deployment of SIH-winning ideas, the concerned Ministry/Departments (Problem Statement
        given agency) is requested to follow the guidelines indicated below.
      </p>

      {/* Guidelines List */}
      <div className="space-y-4 mb-8">
        {guidelinePoints.map((bulletin) => (
          <div key={bulletin.id} className="text-gray-700 text-sm sm:text-base">
            <p>
              <span className="bg-blue-900 text-white font-semibold px-2 py-1 rounded mr-2 inline-block">
                {bulletin.id}
              </span>
              {bulletin.point}
            </p>
          </div>
        ))}
      </div>

      {/* Intellectual Property Section */}
      <h2 className="text-xl font-bold text-gray-800 mb-4">INTELLECTUAL PROPERTY (IP)</h2>
      <p className="text-gray-700 text-sm sm:text-base mb-4 leading-relaxed">
        The Intellectual Property (IP) of the solution resides with the students who have developed and deployed
        the solution post-Hackathon, but the concerned ministry will have lifetime access to the solution for free.
        This has been done to encourage Startups to be created out of the developed solutions while also keeping
        in mind the interest of the involved ministries.
      </p>

      {/* Important Points List */}
      <ul className="list-disc pl-5 space-y-2">
        {milestoneImportant.map((bulletin, index) => (
          <li key={index} className="text-gray-700 text-sm sm:text-base">
            {bulletin.point}
          </li>
        ))}
      </ul>
    </div>
  );
}
