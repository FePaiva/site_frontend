import React from "react";
import Feed from "./feed";
import "./home.css";

const Home = ({ products }) => {
  return (
    <main className="Home">
      {products.length ? (
        <Feed products={products} />
      ) : (
        <p style={{ marginTop: "2rem" }}>No products to display.</p>
      )}
    </main>
  );
};

export default Home;
