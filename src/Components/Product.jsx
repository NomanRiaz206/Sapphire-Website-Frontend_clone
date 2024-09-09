import React from 'react'


const Product = (props) => {
    const {propsdata} = props;
    const {title, description,image,price,}=propsdata
  return (
    <div className=' mx-2 my-3 text-center'>
<div className="card" style={{width:"100%"}}>
  <img src={image} className="card-img-top img-fluid" alt="..." />
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{description.slice(0,50)}...</p>
  
 <div className='d-flex justify-content-between align-items-center'>
    <span className="text-dark">Price: ${price}</span>
   
 
 </div>
  </div>
</div>

    </div>
  )
}

export default Product
