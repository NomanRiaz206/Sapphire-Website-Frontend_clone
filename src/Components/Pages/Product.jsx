import React from 'react'
import { product } from '../../Data/Newindata'

const Product = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {product.map((item, i) => {
          return (
            <div className=" text-center" key={i}>
              <img
                src={item.image}
                className="w-full h-84 object-cover"
                alt={item.name}
              />
              <div className="p-4">
                <h5 className="text-lg font-semibold">{item.name}</h5>
                <p className="text-gray-600 mt-2">{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Product
