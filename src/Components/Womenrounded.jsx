import React from 'react'

const Womenrounded = () => {
  return (
    <div className="container mx-auto flex items-center py-8">
    {/* Left Side Text */}
    <div className="w-1/4 pl-8 text-center">
      <h2 className="text-2xl font-bold mb-4">WOMAN</h2>
    </div>

    {/* Right Side Slider */}
    <div className="w-3/4 relative">
      {/* Slider Container */}
      <div
        className="flex overflow-x-auto space-x-4"
      >
        {/* Slider Items */}
        <div className="text-center flex-shrink-0">
          <img className="w-36 h-36 object-cover rounded-full mx-auto" src="./images/womanr5.avif" alt="Unstitched" />
          <p className="mt-2 text-sm">Unstitched</p>
        </div>
        <div className="text-center flex-shrink-0">
          <img className="w-36 h-36 object-cover rounded-full mx-auto" src="./images/womanr4.avif" alt="Ready To Wear" />
          <p className="mt-2 text-sm">Ready To Wear</p>
        </div>
        <div className="text-center flex-shrink-0">
          <img className="w-36 h-36 object-cover rounded-full mx-auto" src="./images/womanr3.avif" alt="WEST" />
          <p className="mt-2 text-sm">WEST</p>
        </div>
        <div className="text-center flex-shrink-0">
          <img className="w-36 h-36 object-cover rounded-full mx-auto" src="./images/womanr1.avif" alt="Accessories" />
          <p className="mt-2 text-sm">Sleep wear</p>
        </div>
        <div className="text-center flex-shrink-0">
          <img className="w-36 h-36 object-cover rounded-full mx-auto" src="./images/womanr2.avif" alt="Accessories" />
          <p className="mt-2 text-sm">Modest Wear</p>
        </div>
      </div>
    </div>
  </div>
    
  )
}

export default Womenrounded
