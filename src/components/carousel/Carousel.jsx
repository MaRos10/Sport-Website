import React, { useState, useEffect } from "react";
import "./carousel.css";

const images = [
  "src/assets/carousel/pexels-bohlemedia-1884576.jpg",
  "src/assets/carousel/pexels-influencer-3006119.jpg",
  "src/assets/carousel/pexels-aleksandar069-3651674.jpg",
  "src/assets/carousel/pexels-rethaferguson-3886241.jpg",
  "src/assets/carousel/pexels-maumascaro-395082.jpg",
];

const CustomCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="custom-carousel">
      <div
        className="carousel-slide"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((src, index) => (
          <img key={index} src={src} alt={`Slide ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default CustomCarousel;
