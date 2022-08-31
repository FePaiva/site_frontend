import React from "react";
import { Link } from "react-router-dom";
// import './product.css'

const Product = ({ product }) => {
  return (
    // <div className="Product">
    //   <Link to={`/product/${product.id}`}>
    //     <img
    //       style={{ width: "300px", height: "300px" }}
    //       src={product.image_url}
    //       alt={product.name}
    //     />
    //     <h2>{product.name}</h2>
    //   </Link>
    //   <p className="product-description">{
    //             (product.descricao).length <=100
    //                 ? product.descricao
    //                 : `${(product.descricao).slice(0,100)}...`
    //                 }
    //         </p>
    //   <Link to={`/product/${product.id}`}>
    //     <button className="button">Saiba Mais</button>
    //   </Link>
    <div className="card h-100" style={{ width: "18rem" }}>
      <img
        src={product.image_url}
        className="card-img-top"
        alt={product.name}
      />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        {/* <a href={`/product/${product.id}`} className="btn btn-primary">
          Saiba Mais
        </a> */}
        <Link to={`/product/${product.id}`}>
          <button className="btn btn-primary">Saiba Mais</button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Product;
