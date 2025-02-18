import React, { useState } from 'react';
import './styling.css';
import {images} from '../assets/data.jsx'

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Go to the previous slide
  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  // Go to the next slide
  const nextSlide = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="carousel">
      <div className="carousel-content">
        <img src={images[currentIndex]} alt={`Slide ${currentIndex}`} className="carousel-image" />
      </div>

      {/* // Previous slide button  */}
      <button className="carousel-btn prev" onClick={prevSlide} aria-label="Previous Slide">
        &#10094;
      </button>

      {/* // Next slide button  */}
      <button className="carousel-btn next" onClick={nextSlide} aria-label="Next Slide">
        &#10095;
      </button>


    </div>
  );
};

export default Banner;
