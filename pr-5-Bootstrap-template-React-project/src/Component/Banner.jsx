import React from 'react';
import './style.css'; // Import your CSS file

const Banner = () => {
  return (
    <div className="banner p-5">
      <div className="banner-content text-dark p-5 mt-5">
        <h4><span className='text-success fs-4'>100%</span> Organic Vegetables</h4>
        <h1 className='fw-bold text-dark w-75'>Explore fresh & juicy fruits.</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis beatae consequuntur.</p>
        <button className="shop-now-button">Shop Now</button>
      </div>
    </div>
  );
};

export default Banner;
