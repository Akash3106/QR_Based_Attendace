import React from "react";
import logo from "../static/Navbar/logo.ico";

const Menu = () => {
  return (
    <div>
      <div className=" md-4 header  bg-dark text-light">
        <nav class="navbar navbar-expand-lg navbar-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="/">
              <img
                className="logo ico-file"
                src={logo}
                style={{ width: "40px" }}
                alt="logo"
              />
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
                  <a class="nav-link active " href="#">
                    About US
                  </a>
                </li>
              </ul>
              <form class="d-flex" style={{ marginRight: "2%" }}>
                <input
                  class="form-control me-0"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit">
                  <i class="fad fa-search"></i>
                </button>
              </form>
              <div className="corner">
                
              </div>
              <div>
                <i
                  class="fa fa-user"
                  style={{ marginRight: "2%" }}
                  aria-hidden="true"
                >
                  {" "}
                  Login/Singup
                </i>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Menu;
