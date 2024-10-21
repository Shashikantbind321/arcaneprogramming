import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import "./Header.css";

const Header = () => {
  return (
    <header>
      {/* Top Bar */}
      <div className="row">
        {/* Left side: red background */}
        <div className="col-12 col-md-4 bg-danger text-white d-flex justify-content-center align-items-center p-2">
          <i className="bi bi-clock me-2"></i>
          Opening hours: Mon - Sat 9:00 - 7:00
        </div>

        {/* Right side: black background */}
        <div
          className="col-12 col-md-8 bg-dark text-white d-flex justify-content-center justify-content-md-end align-items-center p-3"
          style={{ fontSize: "0.9rem" }}
        >
          <Link className="nav-link">
            <i className="bi bi-phone me-2"></i>
            +91-9936796369 | 6306199011 &nbsp; &nbsp;
          </Link>
          <Link className="nav-link">
            <i className="bi bi-telephone-fill me-2"></i>
            Landline: 05223529791 &nbsp; &nbsp;
          </Link>
          <Link className="ink">
            <i className="bi bi-envelope-fill me-2"></i>
            arcanepinfotech@gmail.com
          </Link>
        </div>
      </div>

      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light border-bottom shadow-sm">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Arcane Programming InfoTech" height="50" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto" style={{ fontSize: "0.75rem" }}>
              {" "}
              {/* Adjust font size */}
              <li className="nav-item">
                <Link className="nav-link fw-bold text-danger" to="/">
                  HOME
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold text-danger" to="/about">
                  ABOUT
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold text-danger" to="/course">
                  COURSE
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold text-danger" to="/events">
                  EVENTS
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold text-danger" to="/gallery">
                  GALLERY
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link fw-bold text-danger"
                  to="/registration"
                >
                  REGISTRATION
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold text-danger" to="/contact">
                  CONTACT
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold text-danger" to="/carrier">
                  CARRIER
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-bold text-danger" to="/placements">
                  PLACEMENTS
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
