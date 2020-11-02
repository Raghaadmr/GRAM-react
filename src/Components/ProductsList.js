import React, { useState } from "react";
import { connect } from "react-redux";
import ProductCard from "./ProductCard"
//search component
import SearchBar from "./SearchBar";

const ProductsList = ({ products })=> {
    const [query, setQuery] = useState("");
console.log(products)
console.log("products")


//for search in list 
    const filteredProduct = () => {
      return products.filter((product) => {
        console.log("products")
        return product.name.toLowerCase().includes(query.toLowerCase());
      });
    };

    
    const productCards = filteredProduct().map(product => (
         // send one item from list to display in card 
      <ProductCard key={product.id} product={product} />
    ));
 


  return (
    <div className="container" style={{textAlign: "center"}}>
      <div>
        <br></br>
      </div>
      
      <div className="mt-2 mb-2">
      <SearchBar onChange={setQuery} />
        <h3> Products</h3>
        <div className="row">
          {productCards}
        </div>
      </div>

 
    </div>
  );
}

const mapStateToProps = ({ products }) => ({
    products
  });

export default connect(mapStateToProps)(ProductsList);