import React from "react";
import { Link, useParams } from "react-router-dom";
import "./productPage.css";

const ProductPage = ({ products }) => {
  const { id } = useParams();
  const product = products.find((product) => product.id.toString() === id);

  return (
    <div className="card mb-3 h-100">
      <div className="row g-0">
        <div className="col-md-4">
          <img
            src={product.image_url}
            className="img-fluid rounded-start"
            alt={product.name}
          />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{product.name}</h5>
            <p className="card-text">{product.description}</p>
            <h5 className="card-title">Tipos</h5>
            <p className="card-text" style={{ whiteSpace: "pre-line" }}>
              {product.tipo}
            </p>
          </div>
        </div>
      </div>
      <div className="card-body">
        <a href="/" className="card-link">
          Voltar
        </a>
        <a href="/" className="card-link">
          Lista completa
        </a>
      </div>
    </div>
  );
};

export default ProductPage;
