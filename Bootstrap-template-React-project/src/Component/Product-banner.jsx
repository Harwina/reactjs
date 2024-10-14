import React from 'react';
import './Style.css';

const ProductBanner = () => {
    return (
        <div className="product-banner-container container">
            <div className="banner-row">
                {/* First Banner */}
                <div className="banner-item">
                    <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product-banner/3.jpg" alt="Fresh Snacks & Sweets" />
                    <div className="banner-details">
                        <h5 className='w-75 text-dark'>Fresh Snacks &amp; Sweets</h5>
                        <p><span className="percent">20%</span> <span className='text-dark'>Off on first order</span></p>
                        <a href="#" className="shop-now-button">Shop Now</a>
                    </div>
                </div>

                {/* Second Banner */}
                <div className="banner-item">
                    <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product-banner/2.jpg" />
                    <div className="banner-details">
                        <h5 className='w-75 text-dark'>Fresh &amp; Healthy Organic Fruits</h5>
                        <p><span className="percent">35%</span><span className='text-dark'>Off on first order</span></p>
                        <a href="#" className="shop-now-button">Shop Now</a>
                    </div>
                </div>

                {/* Third Banner */}
                <div className="banner-item">
                    <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product-banner/1.jpg" />
                    <div className="banner-details">
                        <h5 className='w-75 text-dark'>Healthy Bakery Products</h5>
                        <p><span className="percent">30%</span> <span className='text-dark'>Off on first order</span></p>
                        <a href="#" className="shop-now-button">Shop Now</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductBanner;
