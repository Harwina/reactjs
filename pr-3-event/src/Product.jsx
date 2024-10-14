import React from "react";

const Product = ({ category, item, categoryButtonClick, filterData }) => {
  return (
    <div align="center">
      {/* Category Buttons */}
      <div style={styles.categoryButtons}>
        {category.map((cat) => (
          <button
            key={cat.id}
            onClick={() => categoryButtonClick(cat.name)}
            style={{
              ...styles.button,
              backgroundColor: cat.name === "All" ? "#ff69b4" : "#4caf50",
            }}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div style={styles.productsGrid}>
        {filterData.length > 0 ? (
          filterData.map((pr) => (
            <div key={pr.id} style={styles.card}>
              <img
                src={pr.image}
                alt={pr.name}
                style={styles.productImage}
              />
              <div style={styles.cardBody}>
                <h5 style={styles.cardTitle}>{pr.name}</h5>
                <h5 style={styles.cardPrice}>${pr.price}</h5>
                <a href="#" style={styles.liveButton}>
                  Go Live
                </a>
              </div>
            </div>
          ))
        ) : (
          <p>No items found in this category.</p>
        )}
      </div>
    </div>
  );
};

const styles = {
  categoryButtons: {
    marginBottom: "20px",
  },
  button: {
    fontSize: "1em",
    padding: "10px 20px",
    margin: "5px",
    border: "none",
    color: "#fff",
    cursor: "pointer",
    borderRadius: "5px",
  },
  productsGrid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  card: {
    width: "250px",
    border: "1px solid #e0e0e0",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    borderRadius: "10px",
    margin: "15px",
    overflow: "hidden",
  },
  productImage: {
    objectFit: "cover",
    height: "200px",
    width: "100%",
  },
  cardBody: {
    padding: "15px",
    textAlign: "center",
  },
  cardTitle: {
    fontSize: "1.25em",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  cardPrice: {
    fontSize: "1.1em",
    color: "#ff69b4",
    marginBottom: "10px",
  },
  liveButton: {
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "5px",
    display: "inline-block",
  },
};

export default Product;
