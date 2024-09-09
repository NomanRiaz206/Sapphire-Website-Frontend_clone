import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

const products = [
  {
    title: 'PRINTED ARABIC LAWN DRESS',
    category: 'Intermix New Arrivals',
    price: 'Rs.3,990.00',
    imageUrl: '/images/wd1.webp',
  },
  {
    title: 'EMBROIDERED COTTON SHIRT',
    category: 'Intermix New Arrivals',
    price: 'Rs.6,590.00',
    imageUrl: '/images/wd2.webp',
  },
  {
    title: 'EMBROIDERED COTTON SHIRT',
    category: 'Intermix New Arrivals',
    price: 'Rs.5,990.00',
    imageUrl: '/images/wd3.webp',
  },
  {
    title: 'PRINTED ARABIC LAWN DRESS',
    category: 'Intermix New Arrivals',
    price: 'Rs.3,990.00',
    imageUrl: '/images/wd4.webp',
  },
  {
    title: 'PRINTED ARABIC LAWN DRESS',
    category: 'Intermix New Arrivals',
    price: 'Rs.3,990.00',
    imageUrl: '/images/wd4.webp',
  },
  {
    title: 'PRINTED ARABIC LAWN DRESS',
    category: 'Intermix New Arrivals',
    price: 'Rs.3,990.00',
    imageUrl: '/images/wd4.webp',
  },
  {
    title: 'PRINTED ARABIC LAWN DRESS',
    category: 'Intermix New Arrivals',
    price: 'Rs.3,990.00',
    imageUrl: '/images/wd4.webp',
  },

];

const TrendingProducts = () => {
  return (
    <div className="container mx-auto py-8">
      <div class="bg-white p-4 mx-auto text-center max-w-xs bottom border">
  <h2 class="text-lg font-bold">TRENDING</h2>
</div>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
        navigation
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white shadow-md overflow-hidden mt-5">
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full h-full object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold">{product.title}</h3>
                <p className="text-gray-500">{product.category}</p>
                <p className="text-gray-800 font-bold">{product.price}</p>
              </div>
              <div className="p-4">
                {/* <button className="w-full py-2 bg-gray-300 text-gray-600 rounded-md">
                  ADD TO BAG
                </button> */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TrendingProducts;
