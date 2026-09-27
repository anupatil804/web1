
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar";

import Home from "./component/Home";
import About from "./component/About";
import Product from "./component/Product";
import Login from "./component/Login";
import Registration from "./component/Registration";
import Feedback from "./component/Feedback";

import BuyNow from "./component/BuyNow";
import Cart from "./component/Cart";


/* =====================================================
   HOME PAGE
   All pages are displayed here for scrolling
   ===================================================== */

function MainPage() {
  return (
    <div>

      {/* HOME */}
      <section id="home" className="page-section">
        <Home />
      </section>


      {/* ABOUT */}
      <section id="about" className="page-section">
        <About />
      </section>


      {/* PRODUCTS */}
      <section id="product" className="page-section">
        <Product />
      </section>


      {/* LOGIN */}
      <section id="login" className="page-section">
        <Login />
      </section>


      {/* REGISTRATION */}
      <section id="registration" className="page-section">
        <Registration />
      </section>


      {/* FEEDBACK */}
      <section id="feedback" className="page-section">
        <Feedback />
      </section>

    </div>
  );
}


/* =====================================================
   APP
   ===================================================== */

function App() {

  return (
    <BrowserRouter>

      {/* Navbar always stays visible */}
      <Navbar />

      <Routes>

        {/* ============================================
            MAIN HOME PAGE
            All sections scroll on this page
           ============================================ */}

        <Route path="/" element={<MainPage />} />


        {/* ============================================
            INDIVIDUAL FULL PAGES
           ============================================ */}

        <Route path="/about" element={<About />} />

        <Route path="/product" element={<Product />} />

        <Route path="/login" element={<Login />} />

        <Route path="/registration" element={<Registration />} />

        <Route path="/feedback" element={<Feedback />} />


        {/* ============================================
            SHOPPING PAGES
           ============================================ */}

        <Route path="/BuyNow" element={<BuyNow />} />

        <Route path="/Cart" element={<Cart />} />

      </Routes>

    </BrowserRouter>
  );
}


export default App;

