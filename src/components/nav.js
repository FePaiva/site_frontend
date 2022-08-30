import React from "react";
import { Link } from "react-router-dom";
import SendMessages from "./sendMessage";

const Nav = () => {
  return (
    // <nav
    //   class="navbar navbar-expand-lg navbar-dark"
    //   style={{ backgroundColor: "#333" }}
    // >
    //   <div class="container-fluid">
    //     {/* <a class="navbar-brand" href="#">Navbar</a> */}
    //     <button
    //       class="navbar-toggler"
    //       type="button"
    //       data-bs-toggle="collapse"
    //       data-bs-target="#navbarNav"
    //       aria-controls="navbarNav"
    //       aria-expanded="false"
    //       aria-label="Toggle navigation"
    //     >
    //       <span class="navbar-toggler-icon"></span>
    //     </button>
    //     <div class="collapse navbar-collapse" id="navbarNav">
    //       <ul class="navbar-nav">
    //         <li class="nav-item">
    //           <a class="nav-link " aria-current="page" href="/sobre">
    //             Quem somos
    //           </a>
    //         </li>
    //         <li class="nav-item">
    //           <a
    //             class="nav-link"
    //             target="_blank"
    //             href="https://www.google.com/maps/place/A%C3%A7o+Ivaipor%C3%A3/@-24.2453929,-51.6810971,17z/data=!3m1!4b1!4m5!3m4!1s0x94ec158b4ddff415:0x70d9c0f4c4a5b726!8m2!3d-24.2454181!4d-51.6788713"
    //           >
    //             Onde estamos
    //           </a>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link" href="#">
    //             Catalogo
    //           </a>
    //         </li>
    //         <li class="nav-item">
    //           <a class="nav-link" href="#" tabindex="-1" aria-disabled="true">
    //             <SendMessages />
    //           </a>
    //         </li>
    //         <li class="nav-item dropdown">
    //           <a
    //             class="nav-link dropdown-toggle"
    //             href="#"
    //             id="navbarDropdown"
    //             role="button"
    //             data-bs-toggle="dropdown"
    //             aria-expanded="false"
    //           >
    //             Dropdown
    //           </a>
    //           <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
    //             <li>
    //               <a class="dropdown-item" href="#">
    //                 Action
    //               </a>
    //             </li>
    //             <li>
    //               <a class="dropdown-item" href="#">
    //                 Another action
    //               </a>
    //             </li>
    //             <li>
    //               <hr class="dropdown-divider" />
    //             </li>
    //             <li>
    //               <a class="dropdown-item" href="#">
    //                 Something else here
    //               </a>
    //             </li>
    //           </ul>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          Navbar
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
              <a class="nav-link active" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">
                Link
              </a>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a class="dropdown-item" href="#">
                    Action
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Another action
                  </a>
                </li>
                <li>
                  <hr class="dropdown-divider" />
                </li>
                <li>
                  <a class="dropdown-item" href="#">
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a
                class="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
              >
                Disabled
              </a>
            </li>
          </ul>
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
