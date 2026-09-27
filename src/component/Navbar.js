
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar() {

  const location = useLocation();
  const navigate = useNavigate();


  /* Function for navbar section links */
  const handleSectionClick = (section) => {

    /* If already on Home page */
    if (location.pathname === "/") {

      const element = document.getElementById(section);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth"
        });
      }

    }

    /* If on another page */
    else {

      navigate("/#" + section);

      /* Wait for Home page to load */
      setTimeout(() => {

        const element = document.getElementById(section);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth"
          });
        }

      }, 300);

    }
  };


  return (
    <nav className="navbar">

      {/* Logo */}
      <div className="logo">

        <span className="logo-icon">S</span>

        <div>
          <h2>ShopEasy</h2>
          <p>ONLINE SHOPPING</p>
        </div>

      </div>


      {/* Navigation Links */}
      <div className="nav-links">

        {/* HOME */}
        <Link to="/">
          HOME
        </Link>


        {/* ABOUT */}
        <button
          className="nav-button"
          onClick={() => handleSectionClick("about")}
        >
          ABOUT
        </button>


        {/* PRODUCTS */}
        <button
          className="nav-button"
          onClick={() => handleSectionClick("product")}
        >
          PRODUCTS
        </button>


        {/* LOGIN */}
        <button
          className="nav-button"
          onClick={() => handleSectionClick("login")}
        >
          LOGIN
        </button>


        {/* REGISTRATION */}
        <button
          className="nav-button"
          onClick={() => handleSectionClick("registration")}
        >
          REGISTRATION
        </button>


        {/* FEEDBACK */}
        <button
          className="nav-button"
          onClick={() => handleSectionClick("feedback")}
        >
          FEEDBACK
        </button>


        {/* CART - separate full page */}
        <Link to="/Cart" className="nav-cart">
          CART
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;

