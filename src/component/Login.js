import React from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {

  const navigate = useNavigate();

  function Handelclick() {

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    if (email === "" || password === "") {

      alert("Please enter required fields");

    } else {

      signInWithEmailAndPassword(
        auth,
        email,
        password
      )

        .then(() => {

          alert("Login successful");

          navigate("/");

        })

        .catch((error) => {

          alert("Login failed: " + error.message);

        });
    }
  }

  return (
    <div className="login-page">

      <div className="login-container">

        <h2>Login Page</h2>

        <label>Email: </label>

        <input
          type="email"
          id="email"
          placeholder="Enter your email"
        />

        <br />
        <br />

        <label>Password: </label>

        <input
          type="password"
          id="password"
          placeholder="Enter your password"
        />

        <br />
        <br />

        <button onClick={Handelclick}>
          Login
        </button>

        <br />
        <br />

        <Link to="/registration">
          New user? Register here
        </Link>

      </div>

    </div>
  );
}

export default Login;
