import React from "react";
import { NavLink, Link } from "react-router-dom";
import "../../App.css";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light mb-4">
      <div className="container">
        <Link to="/" className="ubuntu fs-3 fw-bold navbar-brand">
          Rick & Morty <span className="text-primary">Wiki</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <style jsx>{`
            button[aria-expanded="false"] > .close {
              display: none;
            }
            button[aria-expanded="true"] > .open {
              display: none;
            }
          `}</style>

          <span class="fas fa-bars open text-dark"></span>
          <span class="fas fa-times close text-dark"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNavAltMarkup"
        >
          <div className="navbar-nav fs-5">
            <NavLink activeCalssName="active" to="/" className="nav-link">
              Characters
            </NavLink>
            <NavLink to="/episodes" className="nav-link ">
              Episodes
            </NavLink>
            <NavLink to="/location" className="nav-link ">
              Location
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
