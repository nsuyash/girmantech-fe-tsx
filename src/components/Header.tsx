import { NavLink } from "react-router-dom";
import React from 'react'

const Header: React.FC = () => {
  return (
      <header className="shadow-sm sticky-top bg-white">
        <nav className="navbar navbar-expand-lg">
          <div className="container">
            <NavLink className="navbar-brand" to="/">
              <img
                src="https://girmantech.com/Logo2.svg"
                alt="Company logo"
                className="img-fluid"
                style={{ borderRadius: "0px", maxHeight: "50px" }}
              />
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbar"
              aria-controls="offcanvasNavbar"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="offcanvas offcanvas-end"
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
            >
              <div className="offcanvas-header">
                <img className="offcanvas-title img-fluid" id="offcanvasNavbarLabel"
                src="https://girmantech.com/Logo2.svg"
                alt="Company logo"
                style={{ borderRadius: "0px", maxHeight: "50px" }}
              />
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/searchProfiles">
                      SEARCH
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      to="https://girmantech.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      WEBSITE
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      to="https://www.linkedin.com/company/girmantech"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LINKEDIN
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/contactDetails">
                      CONTACT
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
  );
};

export default Header;
