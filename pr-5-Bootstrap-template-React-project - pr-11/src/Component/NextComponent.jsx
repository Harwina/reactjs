import React from 'react';
import './Style.css';

const NextComponent = () => {
  return (
    <div className="next-component-container container">
      <div className="container">
        <div className="row">
          <div className="col-5">
            <div className="card">
              <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/2.jpg" alt="" />
              <div className="card-body">
                <h5 className="card-title">Best snacks with hazelnut mix pack 200gm</h5>
                <p className="card-category">Snacks</p>
                <p className="card-rating">★★★★☆ (4.5)</p>
                <p className="card-price">
                  <span className="current-price">$120.25</span>
                  <span className="old-price">$130.25</span>
                </p>
              </div>
            </div>
            <div className="card">
              <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/2.jpg" alt="" />
              <div className="card-body">
                <h5 className="card-title">Best snacks with hazelnut mix pack 200gm</h5>
                <p className="card-category">Snacks</p>
                <p className="card-rating">★★★★☆ (4.5)</p>
                <p className="card-price">
                  <span className="current-price">$120.25</span>
                  <span className="old-price">$130.25</span>
                </p>
              </div>
            </div>
          </div>
          <div className="col-7">
            <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/products-rightview.jpg" alt="Promo" />
            <div className="next-promo-content">
              <h2>Organic & Healthy Vegetables</h2>
              <p>25% OFF</p>
              <button className="next-shop-now-button">Shop Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextComponent;
