import React from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ref, set } from "firebase/database";
import { auth, db } from "../firebase";
import { Link, useNavigate } from "react-router-dom";
import "./Registration.css";

function Registration() {

  const navigate = useNavigate();

  function Handleclick() {

    let name = document.getElementById("name").value;
    let emailId = document.getElementById("emailId").value;
    let password = document.getElementById("password").value;

    if (name === "" || emailId === "" || password === "") {

      alert("Please enter required fields");

    } else {

      createUserWithEmailAndPassword(
        auth,
        emailId,
        password
      )

        .then((userCredential) => {

          let user = userCredential.user;

          return set(
            ref(db, "users/" + user.uid),
            {
              name: name,
              email: emailId
            }
          );

        })

        .then(() => {

          alert("Registration successful");

          navigate("/login");

        })

        .catch((error) => {

          alert("Registration failed: " + error.message);

        });
    }
  }

  return (
    <div className="registration-page">

      <div className="registration-card">

        <h2>Registration Page</h2>

        <label>Name: </label>

        <input
          type="text"
          id="name"
          placeholder="Enter your name"
        />

        <br />
        <br />

        <label>Email Id: </label>

        <input
          type="email"
          id="emailId"
          placeholder="Enter email id"
        />

        <br />
        <br />

        <label>Password: </label>

        <input
          type="password"
          id="password"
          placeholder="Enter password"
        />

        <br />
        <br />

        <button onClick={Handleclick}>
          Register
        </button>

        <br />
        <br />

        <Link to="/login">
          Already registered? Login here
        </Link>

      </div>

    </div>
  );
}

export default Registration;