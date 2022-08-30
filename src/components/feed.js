import React from "react";
import Product from "./product";

const Feed = ({ products }) => {
  return (
    <>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </>
  );
};

export default Feed;
