import React from "react";
import "./Home.css";

import backgroundImage from "../assets/image.jpg";


function Home() {

  const handelshopnow = () => {

    document.getElementById("product").scrollIntoView({
      behavior: "smooth"
    });

  };


  return (
    <div className="home-container">


      {/* =========================
          HOME HERO SECTION
      ========================= */}

      <div
        className="home"
        style={{
          backgroundImage: `url(${backgroundImage})`
        }}
      >

        <div className="overlay">

          <div className="home-content">

            <p className="small-title">
              WELCOME TO SHOPEASY
            </p>


            <h1>
              SHOP SMART.
              <br />
              SHOP EASY.
            </h1>


            <p className="home-description">
              Find the best products at the best prices.
              <br />
              Quality products, great deals and easy shopping
              all in one place.
            </p>


            <button
              className="Shop-now-btn"
              onClick={handelshopnow}
            >
              SHOP NOW
            </button>

          </div>

        </div>

      </div>


      {/* =========================
          STATISTICS SECTION
      ========================= */}

      <div className="stats-section">

        <div className="stat-card">

          <div className="stat-icon">
            🛍️
          </div>

          <h2>100+</h2>

          <p>Products</p>

        </div>


        <div className="stat-card">

          <div className="stat-icon">
            ⭐
          </div>

          <h2>50+</h2>

          <p>Great Offers</p>

        </div>


        <div className="stat-card">

          <div className="stat-icon">
            👥
          </div>

          <h2>500+</h2>

          <p>Happy Customers</p>

        </div>


        <div className="stat-card">

          <div className="stat-icon">
            📦
          </div>

          <h2>100+</h2>

          <p>Orders</p>

        </div>

      </div>


      {/* =========================
          INTRODUCTION SECTION
      ========================= */}

      <div className="intro-section">

        <div className="intro-text">

          <p className="section-small-title">
            WHY SHOPEASY
          </p>

          <h2>
            Everything You Need,
            <br />
            In One Place
          </h2>

          <p>
            ShopEasy is your simple and trusted online shopping
            destination. Discover quality products at affordable
            prices and enjoy an easy shopping experience.
          </p>

          <p>
            From smart gadgets and headphones to watches,
            fashion and more, we bring everything together
            for you.
          </p>

          <button
            className="explore-btn"
            onClick={handelshopnow}
          >
            EXPLORE PRODUCTS
          </button>

        </div>


        <div className="intro-box">

          <div className="intro-circle">
            🛒
          </div>

          <h3>
            Easy Shopping
          </h3>

          <p>
            Quality products,
            affordable prices and
            simple shopping.
          </p>

        </div>

      </div>

    </div>
  );
}


export default Home;