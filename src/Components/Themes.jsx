import React, { useState } from 'react';
import './styling.css';
import { slides } from '../assets/data.jsx';

const Themes = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Display three cards at once, so calculate the max index as slides.length - 3
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 4) % slides.length
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex - 4 + slides.length) % slides.length
    );
  };

  return (
    <div className="theme-container" id='section2'>
      <h2 className="theme-title">THEMES</h2>
      <p className="theme-subtitle">No problem is too big... No idea is too small</p>

      <button className="theme-nav left" onClick={prevSlide}>       
         <img src='./right-arrow.png' style={{width:'40px'}}/>
      </button>

      <div className="theme">
        {slides.map((slide, index) => (
          <div
            className="theme-card"
            key={index}
            style={{
              transform: `translateX(${(100 / 3) * (index - currentIndex)}%)`,
            }}
          >
            {/* <img src={slide.image} alt={slide.title} className="theme-image" /> */}
            <img src='./eye-open.png' alt={slide.title} className="theme-image" />
            <h3>{slide.title}</h3>
            <p>{slide.description}</p>
          </div>
        ))}
      </div>

      <button className="theme-nav right" onClick={nextSlide}>
        <img src='./left-arrow.png' style={{width:'40px'}}/>
        </button>
    </div>
  );
};

export default Themes;
