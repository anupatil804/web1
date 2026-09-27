import React from "react";
import "./Product.css";
import { useNavigate } from "react-router-dom";

import Product1 from "../assets/product1.jpg";
import Product2 from "../assets/product2.jpg";
import Product3 from "../assets/product3.jpg";
import Product4 from "../assets/product4.jpg";
import Product5 from "../assets/product5.jpg";
import Product6 from "../assets/product6.jpg";
import Product7 from "../assets/product7.jpg";
import Product8 from "../assets/product8.jpg";

function Product() {

  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      name: "Smart Watch",
      price: 1999,
      description: "Stylish smart watch with modern features.",
      image: Product1
    },
    {
      id: 2,
      name: "Wireless Headphones",
      price: 1499,
      description: "High quality wireless headphones.",
      image: Product2
    },
    {
      id: 3,
      name: "Watch",
      price: 999,
      description: "good and stylish Watch.",
      image: Product3
    },
    {
      id: 4,
      name: "Sports Shoes",
      price: 2499,
      description: "Comfortable shoes for daily use.",
      image: Product4
    },
    {
      id: 5,
      name: "Ladies Handbag",
      price: 1299,
      description: "Beautiful handbag for everyday use.",
      image: Product5
    },
    {
      id: 6,
      name: "Wireless Earbuds",
      price: 1799,
      description: "Compact wireless earbuds with clear sound.",
      image: Product6
    },
    {
      id: 7,
      name: "School bag",
      price: 1799,
      description: "Attractive bags.",
      image: Product7
    },
    {
      id: 8,
      name: "ladies shoes
      ",
      price: 1799,
      description: "Attractive and stylish shoes.",
      image: Product8
    }
  ];

  function addToCart(product) {

    let cart =
      JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(product);

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

    navigate("/cart");
  }

  function buyNow(product) {

    localStorage.setItem(
      "buyNowProduct",
      JSON.stringify(product)
    );

    navigate("/buynow");
  }

  return (
    <div className="product-page">

      <h1 className="product-title">
        Our Products
      </h1>

      <div className="product-container">

        {products.map((product) => (

          <div
            className="product-card"
            key={product.id}
          >

            <div className="product-image">

              <img
                src={product.image}
                alt={product.name}
              />

            </div>

            <div className="product-details">

              <h2>{product.name}</h2>

              <p className="description">
                {product.description}
              </p>

              <p className="price">
                ₹{product.price}
              </p>

              <button
                className="buy-button"
                onClick={() => buyNow(product)}
              >
                Buy Now
              </button>

              <button
                className="cart-button"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Product;