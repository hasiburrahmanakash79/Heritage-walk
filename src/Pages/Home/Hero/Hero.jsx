import { useState, useEffect } from 'react';

const Hero = () => {

    const interval = 3000 

    const images = [
        'https://i.ibb.co/Rpx5Kqd/banner1.jpg',
        'https://i.ibb.co/LSSJyxS/banner6.jpg',
        'https://i.ibb.co/cxzhhG5/banner5.jpg',
      ];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to move to the next slide
  const nextSlide = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  // Automatically move to the next slide at the specified interval
  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide();
    }, interval);

    return () => {
      clearTimeout(timer);
    };
  }, [currentIndex, interval]); // Re-run effect when currentIndex or interval changes

  return (
    <div className="relative w-full h-[500px] overflow-hidden">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={image} alt={`Slide ${index}`} className="w-full h-full object-cover" />
        </div>
      ))}
    </div>
  );
};

export default Hero;
