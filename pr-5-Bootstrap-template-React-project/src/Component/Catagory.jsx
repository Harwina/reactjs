import React from 'react';
import './Style.css';

const Category = () => {
  return (
    <div className="category-container">
      <div className="category-sidebar">
        <div className="category-item">
          <h5>Cake & Milk</h5>
          <p>(65 items)</p>
        </div>
        <div className="category-item">
          <h5>Fresh Meat</h5>
          <p>(30 items)</p>
        </div>
        <div className="category-item">
          <h5>Vegetables</h5>
          <p>(25 items)</p>
        </div>
        <div className="category-item">
          <h5>Apple & Mango</h5>
          <p>(45 items)</p>
        </div>
        <div className="category-item">
          <h5>Strawberry</h5>
          <p>(68 items)</p>
        </div>
        <div className="view-more">View More</div>
      </div>

      <div className="promo-cards">
        <div className="promo-card" style={{ backgroundImage: `url('https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/categories/3.jpg')` }}>
          <div className="promo-discount">50% OFF</div>
          <div className="promo-title">Cake</div>
          <button className="shop-now-button">Shop Now</button>
        </div>
        <div className="promo-card" style={{ backgroundImage: `url('https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/categories/4.jpg')` }}>
          <div className="promo-discount">40% OFF</div>
          <div className="promo-title">Milk</div>
          <button className="shop-now-button">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Category;
