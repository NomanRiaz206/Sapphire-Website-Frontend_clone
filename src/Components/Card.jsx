import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { product } from '../Data/Womandata';
import Product from './Product';

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    768: { items: 3 },
    992: { items: 3 },
    1200: { items: 4 },
   
};

const items = product.map((x,i)=> <Product propsdata={x} key={i} />)
const Card = () => {
  return (
    <div className='container mx-auto'>
      <AliceCarousel
     
        items={items}
        responsive={responsive}
        autoPlay
        disableButtonsControls
        disableDotsControls
        infinite
        autoPlayInterval={2000}
    />
    </div>
  )
}

export default Card