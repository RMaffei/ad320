import React from "react";
import products from "./products";
import "./ProductList.css";

const ProductList= () => {
  return ( // render jsk for list of products
    <div className="product-list">
      {products.map((product) => (
        <div key={product.id} className="product">
          <h3>{product.name}</h3>
          <p>{product.desc}</p>
          <img src="https://placehold.co/200" alt="Product Image" />
          <p>Price: ${product.cost}</p>
        </div>
      ))}
    </div>
  );
};
export default ProductList;
