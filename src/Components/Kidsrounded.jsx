import React from 'react'

const Kidsrounded = () => {
  return (
    <div>
          <div className="container mx-auto flex items-center py-8">
      {/* Left Side Text */}
      <div className="w-1/4 pl-8 text-center">
        <h2 className="text-2xl font-bold mb-4">KIDS</h2>
      </div>

      {/* Right Side Slider */}
      <div className="w-3/4 relative">
        {/* Slider Container */}
        <div
          className="flex overflow-x-auto space-x-4"
        >
          {/* Slider Items */}
          <div className="text-center flex-shrink-0">
            <img className="w-36 h-36 object-cover rounded-full mx-auto" src="./images/kidsr1.avif" alt="Unstitched" />
            <p className="mt-2 text-sm">Girls</p>
          </div>
          <div className="text-center flex-shrink-0">
            <img className="w-36 h-36 object-cover rounded-full mx-auto" src="./images/kidsr2.avif" alt="Ready To Wear" />
            <p className="mt-2 text-sm">Boys</p>
          </div>
          <div className="text-center flex-shrink-0">
            <img className="w-36 h-36 object-cover rounded-full mx-auto" src="./images/kider3.avif" alt="Ready To Wear" />
            <p className="mt-2 text-sm">Kids Bedding</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Kidsrounded
