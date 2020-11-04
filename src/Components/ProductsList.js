import React, { useState } from "react";
import { connect } from "react-redux";

// components
import SearchBar from "./SearchBar";
import ProductCard from "./ProductCard";

const ProductsList = ({ products }) => {
  const [query, setQuery] = useState("");

  //for search in list
  const filteredProduct = () => {
    return products.filter((product) => {
      console.log("products");
      return product.name.toLowerCase().includes(query.toLowerCase());
    });
  };

  // send one item from list to display in card
  const productCards = filteredProduct().map((product) => (
    <ProductCard key={product.id} product={product} />
  ));

  return (
    <div className="container" style={{ textAlign: "center" }}>
      <br />

      <div className="mt-2 mb-2">
        <SearchBar onChange={setQuery} />
        <h3> Products</h3>
        <div className="row">{productCards}</div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ products }) => ({
  products,
});

export default connect(mapStateToProps)(ProductsList);
