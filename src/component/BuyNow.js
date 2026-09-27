
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { push, ref } from "firebase/database";
import { db } from "../firebase";
import "./BuyNow.css";

function BuyNow() {

  const navigate = useNavigate();

  const product =
    JSON.parse(localStorage.getItem("buyNowProduct"));

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  function placeOrder(e) {

    e.preventDefault();

    if (
      name === "" ||
      email === "" ||
      phone === "" ||
      address === ""
    ) {
      alert("Please fill all details");
      return;
    }

    if (!product) {
      alert("No product selected");
      return;
    }

    const order = {
      productId: product.id,
      productName: product.name,
      productPrice: product.price,
      productDescription: product.description,

      customerName: name,
      customerEmail: email,
      customerPhone: phone,
      customerAddress: address,

      orderDate: new Date().toLocaleString(),
      status: "Pending"
    };

    push(ref(db, "orders"), order)
      .then(() => {

        alert("Order placed successfully!");

        localStorage.removeItem("buyNowProduct");

        navigate("/Product");

      })
      .catch((error) => {

        console.log(error);

        alert("Failed to place order");

      });
  }

  if (!product) {

    return (
      <div className="no-product">

        <h2>No Product Selected</h2>

        <p>
          Please go to the product page and click Buy Now.
        </p>

        <button
          onClick={() => navigate("/Product")}
        >
          Go to Products
        </button>

      </div>
    );
  }

  return (
    <div className="buy-page">

      <h1>Buy Now</h1>

      <div className="buy-container">

        {/* Product Details */}

        <div className="selected-product">

          <h2>Product Details</h2>

          <img
            src={product.image}
            alt={product.name}
            className="buy-product-image"
          />

          <h3>{product.name}</h3>

          <p>
            {product.description}
          </p>

          <h2 className="product-price">
            ₹{product.price}
          </h2>

        </div>


        {/* Customer Details */}

        <div className="customer-form">

          <h2>Customer Details</h2>

          <form onSubmit={placeOrder}>

            <label>
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) =>
                setName(e.target.value)
              }
            />


            <label>
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
            />


            <label>
              Contact Number
            </label>

            <input
              type="tel"
              placeholder="Enter your contact number"
              value={phone}
              onChange={(e) =>
                setPhone(e.target.value)
              }
            />


            <label>
              Address
            </label>

            <textarea
              placeholder="Enter your full address"
              value={address}
              onChange={(e) =>
                setAddress(e.target.value)
              }
            ></textarea>


            <button
              type="submit"
              className="place-order-button"
            >
              Place Order
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default BuyNow;


