import React from 'react';

const StyledByYou = () => {
  return (
    <div className="bg-orange-100 py-8 mb-9">
      <div className="container mx-auto">
       
        <h2 className="text-2xl font-bold mb-4 text-center">STYLED BY YOU</h2>
        <h2 className="text-lg font-bold mb-4 text-center">#SAPHHIREXME</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div>
          <img src="/images/s1.webp" alt="Fest New Arrivals" className="w-full h-72 object-cover" />
          <h2 className="text-lg font-bold mb-4 text-center" >Trending Wear</h2>
          </div>
          <div>
          <img src="/images/s2.webp" alt="Threads of Tradition" className="w-full h-72 object-cover" />
          <h2 className="text-lg font-bold mb-4 text-center" >Trending Wear</h2>
          </div>
          <div>
          <img src="/images/s3.webp" alt="Styled By You" className="w-full h-72 object-cover" />
          <h2 className="text-lg font-bold mb-4 text-center" >Trending Wear</h2>
          </div>
          <div>
          <img src="/images/s4.webp" alt="Styled By You" className="w-full h-72 object-cover" />
          <h2 className="text-lg font-bold mb-4 text-center mt-2" >Trending Wear</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StyledByYou;
