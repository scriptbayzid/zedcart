// components/SimpleSlider.tsx

'use client'; // Make sure to include this at the top

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const slides = [
  {
    id: 1,
    image: '/banner-2.png', // Ensure this path is correct
    title: 'Summer Sale',
    description: 'This is the best deal ever',
  },
  {
    id: 2,
    image: '/banner-2.png', // Add another image for demonstration
    title: 'Winter Sale',
    description: 'Don’t miss out on the best deals!',
  },
];

const SimpleSlider: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  // Autoplay functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <div className="relative w-full h-96"> {/* Increased height to h-96 */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-500 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${slide.image})` }}
        >
          <div className="absolute left-16 top-1/2 transform -translate-y-1/2 text-white"> {/* Adjusted positioning */}
            <h2 className="text-3xl font-bold">{slide.title}</h2> {/* Increased text size */}
            <p className="mt-2 text-lg">{slide.description}</p> {/* Increased text size */}
            <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
              Show Now
            </button>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow" // Adjusted positioning
      >
        &#9664; {/* Left arrow */}
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2 shadow" // Adjusted positioning
      >
        &#9654; {/* Right arrow */}
      </button>
    </div>
  );
};

export default SimpleSlider;
