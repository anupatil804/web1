import React from "react";
import { useNavigate } from "react-router-dom";
import "./Cart.css";

function Cart() {

  const navigate = useNavigate();

  const cart =
    JSON.parse(localStorage.getItem("cart")) || [];

  function removeFromCart(index) {

    let newCart = cart.filter(
      (_, i) => i !== index
    );

    localStorage.setItem(
      "cart",
      JSON.stringify(newCart)
    );

    window.location.reload();
  }

  return (
    <div className="cart-page">

      <h1>My Cart</h1>

      {cart.length === 0 ? (

        <div className="empty-cart">

          <h2>Your Cart is Empty</h2>

          <p>
            Please add a product to your cart.
          </p>

          <button
            onClick={() => navigate("/Product")}
          >
            Go to Products
          </button>

        </div>

      ) : (

        <div className="cart-container">

          {cart.map((product, index) => (

            <div
              className="cart-card"
              key={index}
            >

              {/* Product Image */}
              <div className="cart-image-container">

                <img
                  src={product.image}
                  alt={product.name}
                  className="cart-image"
                />

              </div>

              {/* Product Details */}
              <div className="cart-details">

                <h2>
                  {product.name}
                </h2>

                <p>
                  {product.description}
                </p>

                <h3>
                  ₹{product.price}
                </h3>

                <button
                  className="remove-button"
                  onClick={() =>
                    removeFromCart(index)
                  }
                >
                  Remove
                </button>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}

export default Cart;