import { useState } from "react";
import Navigation from "./Navigation/Nav";
import Product from "./Products/Product";
import Recommended from "./Recommended/Recommended";
import Sidebar from "./Sidebar/Sidebar";
import products from "./db/data";
import Card from "./components/Card";
import "./index.css"

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  // Input filter
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const fiilteredItems = products.filter(
    (product) =>
      product.title.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) !==
      -1,
  );

  // Radio Filter
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // Button fliter
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  const filteredData = (products, selected, query) => {
    let filteredProducts = products;

    // Filtering input item
    if (query) {
      filteredProducts = fiilteredItems;
    }

    // Selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, tilte }) =>
          category === selected ||
          color == selected ||
          company == selected ||
          newPrice === selected ||
          tilte === selected,
      );
    }

    return filteredProducts.map(
      ({ img, title, reviews, star, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          Star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      ),
    );
  };

  const response = filteredData(products, selectedCategory, query);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Product response={response} />
    </>
  );
};

export default App;
