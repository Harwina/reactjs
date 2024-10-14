import { useState } from "react";
import { category, item } from "./Data";
import Product from "./Product";

function App() {
  const [filterData, setFilterData] = useState(item);

  const categoryButtonClick = (cat) => {
    if (cat === "All") {
      setFilterData(item);
    } else {
      const filteredItems = item.filter((product) => product.category === cat);
      setFilterData(filteredItems);
    }
  };

  return (
    <div style={styles.appContainer}>
      <h1 style={styles.title}>Makeup & Beauty Filter App</h1>
      <Product
        category={category}
        item={item}
        categoryButtonClick={categoryButtonClick}
        filterData={filterData}
      />
    </div>
  );
}

const styles = {
  appContainer: {
    maxWidth: "1200px",
    margin: "auto",
    padding: "20px",
  },
  title: {
    textAlign: "center",
    fontSize: "2.5em",
    marginBottom: "30px",
    color: "#ff69b4",
  },
};

export default App;
