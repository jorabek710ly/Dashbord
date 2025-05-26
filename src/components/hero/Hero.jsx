import React, { useEffect, useState } from 'react';
import './Hero.css';

const images = [
  '/src/assets/iphone.jpg',
  '/src/assets/mac.jpg',
  '/src/assets/watch.jpg',
];

export const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="heroContainer">
      <img src={images[currentIndex]} alt="carousel" className="heroImage" />
    </div>
  );
};