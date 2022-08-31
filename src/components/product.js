import React from "react";
import { Link } from "react-router-dom";
// import './product.css'

const Product = ({ product }) => {
  return (
    // <div class="container">
    //   <div className="row row-cols-3 row-cols-sm-3 g-4">
    //     <div className="col">
    //       <div className="card h-100">
    //         <img
    //           src={product.image_url}
    //           className="card-img-top"
    //           alt={product.name}
    //         />
    //         <div className="card-body">
    //           <h5 className="card-title">{product.name}</h5>
    //           <p className="card-text">{product.description}.</p>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className="card h-100" style={{ width: "18rem" }}>
      <img
        src={product.image_url}
        className="card-img-top"
        alt={product.name}
      />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <Link to={`/product/${product.id}`}>
          <button className="btn btn-primary">Saiba Mais</button>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Product;
