import React, { useState } from "react";
import ProductCard from "./ProductCard";

const productsData = [
  { id: 1, name: "iPhone 15 pro", price: 144900, category: "iPhone", img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tomsguide.com%2Fnews%2Fiphone-15&psig=AOvVaw0juNDmzU4cjnZnWy2kqeZu&ust=1727972687606000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCMiVnZKO8IgDFQAAAAAdAAAAABAE" },
  { id: 2, name: "Apple Watch Series 9", price: 41999, category: "Watch", img: "https://example.com/watch.jpg" },
  { id: 3, name: "AirPods 2nd generation", price: 129000, category: "AirPods", img: "https://example.com/airpods.jpg" },
  { id: 4, name: "MacBook Air", price: 99900, category: "Mac", img: "https://example.com/macbook.jpg" },
  { id: 5, name: "iMac", price: 134900, category: "Mac", img: "https://example.com/imac.jpg" },
  { id: 6, name: "AirPods 3rd generation", price: 19900, category: "AirPods", img: "https://example.com/airpods3.jpg" },
  { id: 7, name: "Apple Watch Ultra 2", price: 89900, category: "Watch", img: "https://example.com/watch-ultra.jpg" },
  { id: 8, name: "Apple Watch SE", price: 29900, category: "Watch", img: "https://example.com/watch-se.jpg" },
];

function App() {
  const [filter, setFilter] = useState("All");

  const filteredProducts = filter === "All"
    ? productsData
    : productsData.filter(product => product.category === filter);

  return (
    <div className="app-container">
      <h1 className="title">Apple Store</h1>

      <div className="filter-buttons">
        <button className={`btn ${filter === "All" ? "active" : ""}`} onClick={() => setFilter("All")}>All</button>
        <button className={`btn ${filter === "iPhone" ? "active" : ""}`} onClick={() => setFilter("iPhone")}>iPhone</button>
        <button className={`btn ${filter === "Watch" ? "active" : ""}`} onClick={() => setFilter("Watch")}>Watch</button>
        <button className={`btn ${filter === "AirPods" ? "active" : ""}`} onClick={() => setFilter("AirPods")}>AirPods</button>
        <button className={`btn ${filter === "Mac" ? "active" : ""}`} onClick={() => setFilter("Mac")}>Mac</button>
      </div>

      <div className="products-grid">
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;
