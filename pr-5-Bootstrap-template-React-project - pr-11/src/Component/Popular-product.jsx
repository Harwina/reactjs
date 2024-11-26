import React from 'react';
import './Style.css'; 

const PopularProduct = () => {
  return (
    <div className="popular-product-container container">
      {/* Top section */}
      <div className="popular-product-header">
        <h2 className="popular-product-title">Popular Products</h2>
        <p className="popular-product-subtitle">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
        </p>
      </div>

      {/* Bottom section with category sidebar and products */}
      <div className="popular-product-body d-flex">
        
        {/* Sidebar with categories */}
        <div className="product-category-sidebar">
          <div className="product-category-item active">
            <h5>All</h5>
            <div className="arrow">
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
          <div className="product-category-item">
             <h5>Snack</h5>
            <div className="arrow">
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
          <div className="product-category-item">
             <h5>Vegetables</h5>
            <div className="arrow">
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
          <div className="product-category-item">
             <h5>Fruit</h5>
            <div className="arrow">
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
          <div className="product-category-item">
             <h5>Berry</h5>
            <div className="arrow">
              <i className="fa-solid fa-arrow-right"></i>
            </div>
          </div>
          <div className="product-view-more">View More</div>
        </div>

        {/* Product section */}
        <div className="product-cards-section">
          <div className="product-card-wrapper">
            <div className="product-card me-3 ms-2">
              <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/1.jpg" alt="Lemon" className="product-image" />
              <p className="product-category">Vegetables</p>
              <h3>Fresh organic villa farm lemon 500gm pack</h3>
              <p className="product-rating">★★★★☆ (4.5)</p>
              <p className='text-success fw-bold fs-5'>$ 120.25</p>
            </div>
            
            <div className="product-card me-3">
              <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/9.jpg" alt="Hazelnut Snack" className="product-image" />
              <p className="product-category">Snacks</p>
              <h3>Best snacks with hazelnut pack 200gm</h3>
              <p className="product-rating">★★★★★ (5.0)</p>
              <p className='text-success fw-bold fs-5'>$145</p>
            </div>
            
            <div className="product-card">
              <img src="https://maraviyainfotech.com/projects/carrot/carrot-v2/carrot-html/assets/img/product/2.jpg" alt="Apple Juice" className="product-image" />
              <p className="product-category">Fruits</p>
              <h3>Fresh organic apple 1kg simla marm</h3>
              <p className="product-rating">★★★★☆ (4.5)</p>
             <p className='text-success fw-bold fs-5'>$120.25</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularProduct;
