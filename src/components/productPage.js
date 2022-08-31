import React from "react";
import { Link, useParams } from "react-router-dom";

const ProductPage = ({ products }) => {
  const { id } = useParams();
  const product = products.find((product) => product.id.toString() === id);

  return (
    // <table className="ProductPage">
    //   <thead>
    //     <tr>
    //       <th>{product.name}</th>
    //       <th scope="col">Modelos</th>
    //       <th scope="col">Descriçao</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     <tr>
    //       {/* <td>{product.name}</td> */}
    //       <td>
    //         <img
    //           style={{ width: "300px", height: "300px" }}
    //           src={product.image_url}
    //           alt={product.name}
    //         />
    //       </td>
    //       <td>
    //         <li>{product.mod1}</li>
    //         <li>{product.mod2}</li>
    //         <li>{product.mod3}</li>
    //         <li>{product.mod4}</li>
    //         <li>{product.mod5}</li>
    //         <li>{product.mod6}</li>
    //         <li>{product.mod7}</li>
    //         <li>{product.mod8}</li>
    //       </td>
    //       <td>{product.descricao}</td>
    //     </tr>
    //   </tbody>
    //   <tfoot>
    //     <tr>
    //       <th scope="row" colSpan="1">
    //         <Link to="/">
    //           <button className="button">Voltar</button>
    //         </Link>
    //       </th>
    //       <th scope="row" colSpan="1">
    //         <button className="button">Veja lista completa</button>
    //       </th>
    //     </tr>
    //   </tfoot>
    // </table>
    <div className="card mb-3">
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
            <p className="card-text">{product.tipo}</p>
          </div>
        </div>
      </div>
      <div class="card-body">
        <a href="/" class="card-link">
          Voltar
        </a>
        <a href="/" class="card-link">
          Lista completa
        </a>
      </div>
      {/* <Link to="/">
        <button className="btn btn-primary">Voltar</button>
      </Link>
      <Link to="/">
        <button className="btn btn-primary">Lista completa</button>
      </Link> */}
    </div>
  );
};

export default ProductPage;
