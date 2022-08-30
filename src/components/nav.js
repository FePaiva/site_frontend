import React from "react";
import { Link } from "react-router-dom";
import SendMessages from "./sendMessage";
import "./nav.css";

const Nav = () => {
  return (
    <nav
      class="navbar navbar-expand-lg navbar-dark"
      style={{ backgroundColor: "#333" }}
    >
      <div class="container-fluid ms-2">
        <a class="navbar-brand" href="/">
          Aço Ivaiporã
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link" aria-current="page" href="/sobre">
                Quem somos
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                target="blank"
                href="https://www.google.com/maps/place/A%C3%A7o+Ivaipor%C3%A3/@-24.2453929,-51.6810971,17z/data=!3m1!4b1!4m5!3m4!1s0x94ec158b4ddff415:0x70d9c0f4c4a5b726!8m2!3d-24.2454181!4d-51.6788713"
              >
                Onde Estamos
              </a>
            </li>
            {/* </ul>
          <ul class="nav-item"> */}
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Admin
              </a>
              <ul
                class="dropdown-menu dropdown-menu-lg-end"
                aria-labelledby="navbarDropdown"
              >
                <li>
                  <a class="dropdown-item" href="/login">
                    Log In
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="logout">
                    Log Out
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          <form class="d-flex me-2">
            <input
              class="form-control me-2"
              size="50"
              type="search"
              placeholder="Buscar Produto"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Buscar
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
