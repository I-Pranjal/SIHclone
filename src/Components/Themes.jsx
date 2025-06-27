import React, { useState, useEffect } from 'react';
import { slides } from '../assets/data.jsx';
import { MoveLeft, MoveRight } from 'lucide-react';

const Themes = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(3);

  const totalSlides = slides.length;

  // Responsive count adjustment
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) setVisibleCount(1); // mobile
      else if (window.innerWidth < 768) setVisibleCount(2); // tablet
      else setVisibleCount(3); // desktop
    };

    handleResize(); // on load
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + visibleCount) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      (prev - visibleCount + totalSlides) % totalSlides
    );
  };

  return (
    <div className="w-full px-4 py-10 bg-gray-50" id="section2">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">THEMES</h2>
      <p className="text-center text-gray-500 mb-6">
        No problem is too big... No idea is too small
      </p>

      <div className="relative flex items-center justify-center max-w-6xl mx-auto">
        {/* Prev Button */}
        <button
          className="absolute left-0 z-10 bg-white text-black shadow-md p-2 rounded-full hover:bg-gray-100"
          onClick={prevSlide}
        >
          <MoveLeft />
        </button>

        {/* Slide Container */}
        <div className="overflow-hidden w-full">
          <div
            className="flex transition-transform duration-500"
            style={{
              transform: `translateX(-${(100 / totalSlides) * currentIndex}%)`,
              width: `${(100 / visibleCount) * totalSlides}%`,
            }}
          >
            {slides.map((slide, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-full px-2"
                style={{ width: `${100 / totalSlides}%` }}
              >
                <div className="bg-white rounded-xl shadow-md p-4 h-full text-center">
                  <img
                    src="/eye-open.png"
                    alt={slide.title}
                    className="w-16 h-16 mx-auto mb-4"
                  />
                  <h3 className="font-semibold text-lg text-gray-800">{slide.title}</h3>
                  <p className="text-sm text-gray-600 mt-2">{slide.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Next Button */}
        <button
          className="absolute right-0 z-10 bg-white shadow-md p-2 rounded-full text-black hover:bg-gray-100"
          onClick={nextSlide}
        >
          <MoveRight />
        </button>
      </div>
    </div>
  );
};

export default Themes;
