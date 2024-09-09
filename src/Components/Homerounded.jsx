import React, { useRef } from 'react';

const Homerounded = () => {
  const sliderRef = useRef(null);

  const slide = (direction) => {
    if (sliderRef.current) {
      const scrollAmount = 150;
      sliderRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="container mx-auto flex items-center py-8">
      {/* Left Side Text */}
      <div className="w-1/4 pl-8 text-center">
        <h2 className="text-2xl font-bold mb-4">HOME</h2>
      </div>

      {/* Right Side Slider */}
      <div className="w-3/4 relative">
        {/* Slider Container */}
        <div
          ref={sliderRef}
          className="flex overflow-x-auto space-x-4"
        >
          {/* Slider Items */}
          <div className="text-center flex-shrink-0">
            <img className="w-36 h-36 object-cover rounded-full mx-auto" src="./images/newr1.avif" alt="Unstitched" />
            <p className="mt-2 text-sm">Unstitched</p>
          </div>
          <div className="text-center flex-shrink-0">
            <img className="w-36 h-36 object-cover rounded-full mx-auto" src="./images/newr2.avif" alt="Ready To Wear" />
            <p className="mt-2 text-sm">Ready To Wear</p>
          </div>
          <div className="text-center flex-shrink-0">
            <img className="w-36 h-36 object-cover rounded-full mx-auto" src="./images/newr3.avif" alt="Man" />
            <p className="mt-2 text-sm">Man</p>
          </div>
          <div className="text-center flex-shrink-0">
            <img className="w-36 h-36 object-cover rounded-full mx-auto" src="./images/newr5.avif" alt="WEST" />
            <p className="mt-2 text-sm">WEST</p>
          </div>
          <div className="text-center flex-shrink-0">
            <img className="w-36 h-36 object-cover rounded-full mx-auto" src="./images/newr5.1.avif" alt="Home" />
            <p className="mt-2 text-sm">Home</p>
          </div>
          <div className="text-center flex-shrink-0">
            <img className="w-36 h-36 object-cover rounded-full mx-auto" src="./images/newr6.jpg" alt="Kids" />
            <p className="mt-2 text-sm">Kids</p>
          </div>
          <div className="text-center flex-shrink-0">
            <img className="w-36 h-36 object-cover rounded-full mx-auto" src="./images/newr7.avif" alt="Accessories" />
            <p className="mt-2 text-sm">Accessories</p>
          </div>
          <div className="text-center flex-shrink-0">
            <img className="w-36 h-36 object-cover rounded-full mx-auto" src="./images/newr8.avif" alt="Accessories" />
            <p className="mt-2 text-sm">Accessories</p>
          </div>
        </div>

        {/* Left Arrow */}
        <button
          onClick={() => slide('left')}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-800"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M12.707 14.707a1 1 0 010-1.414L8.414 9l4.293-4.293a1 1 0 10-1.414-1.414l-5 5a1 1 0 000 1.414l5 5a1 1 0 001.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => slide('right')}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-gray-800"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L11.586 9 7.293 4.293a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Homerounded;
