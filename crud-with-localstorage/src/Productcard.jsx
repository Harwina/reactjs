import React from "react";
import "./App.css"

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <img src={product.img} alt={product.name} className="product-image" />
      <h3>{product.name}</h3>
      <p>Rs: {product.price.toLocaleString()}</p>
    </div>
  );
};

export default ProductCard;
