import React, { useState, useEffect } from 'react';
import { slides } from '../assets/data.jsx';
import { MoveLeft, MoveRight, Rocket, Globe, Microscope, Brain } from 'lucide-react';

const iconMap = [Rocket, Globe, Microscope, Brain];

const Themes = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisibleCount(1);
      else if (window.innerWidth < 1024) setVisibleCount(2);
      else setVisibleCount(3);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = slides.length;

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + visibleCount >= totalSlides ? 0 : prev + visibleCount
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev - visibleCount < 0 ? totalSlides - visibleCount : prev - visibleCount
    );
  };

  const visibleSlides = slides.slice(currentIndex, currentIndex + visibleCount).length === visibleCount
    ? slides.slice(currentIndex, currentIndex + visibleCount)
    : [...slides.slice(currentIndex), ...slides.slice(0, visibleCount - (totalSlides - currentIndex))];

  return (
    <div className="w-full px-4 py-10 bg-white" id="section2">
      <h2 className="text-3xl font-bold text-center text-orange-600 mb-2">THEMES</h2>
      <p className="text-center text-gray-700 mb-8">
        No problem is too big... No idea is too small
      </p>

      <div className="relative flex items-center justify-center max-w-7xl mx-auto">
        {/* Prev Button */}
        <button
          className="absolute left-0 z-10 bg-white border border-orange-500 text-orange-500 p-2 rounded-full hover:bg-orange-100"
          onClick={prevSlide}
        >
          <MoveLeft />
        </button>

        {/* Slide Container */}
        <div className="w-full overflow-hidden">
          <div className="flex justify-center gap-6 transition-transform duration-500 ease-in-out">
            {visibleSlides.map((slide, index) => {
              const Icon = iconMap[index % iconMap.length];
              return (
                <div
                  key={index}
                  className="bg-orange-50 border border-orange-200 rounded-xl shadow-md hover:shadow-lg transition p-6 flex-1 text-center min-w-0"
                >
                  <div className="flex justify-center mb-4 text-neutral-700">
                    <Icon size={48} />
                  </div>
                  <h3 className="text-lg font-semibold text-blue-900">{slide.title}</h3>
                  <p className="text-gray-700 text-sm mt-2">{slide.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Next Button */}
        <button
          className="absolute right-0 z-10 bg-white border border-orange-500 text-orange-500 p-2 rounded-full hover:bg-orange-100"
          onClick={nextSlide}
        >
          <MoveRight />
        </button>
      </div>
    </div>
  );
};

export default Themes;
