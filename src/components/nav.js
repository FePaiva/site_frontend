import React from "react";
import { Link } from "react-router-dom";
import SendMessages from "./sendMessage";
import "./nav.css";

const Nav = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "#333" }}
    >
      <div className="container-fluid ms-2">
        <a className="navbar-brand" href="/">
          Aço Ivaiporã
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="/sobre">
                Quem somos
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                target="blank"
                href="https://www.google.com/maps/place/A%C3%A7o+Ivaipor%C3%A3/@-24.2453929,-51.6810971,17z/data=!3m1!4b1!4m5!3m4!1s0x94ec158b4ddff415:0x70d9c0f4c4a5b726!8m2!3d-24.2454181!4d-51.6788713"
              >
                Onde Estamos
              </a>
            </li>
            {/* </ul>
          <ul className="nav-item"> */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Admin
              </a>
              <ul
                className="dropdown-menu dropdown-menu-lg-end"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <a className="dropdown-item" href="/login">
                    Log In
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="logout">
                    Log Out
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form className="d-flex me-2">
            <input
              className="form-control me-2"
              size="50"
              type="search"
              placeholder="Buscar Produto"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Buscar
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
