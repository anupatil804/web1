import React from "react";
import { Link } from "react-router-dom";
import { ref, push } from "firebase/database";
import { db } from "../firebase";
import "./Feedback.css";

function Feedback() {

  function HandleSubmit() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let feedback = document.getElementById("feedback").value;

    if (name === "" || email === "" || feedback === "") {

      alert("Please fill all required fields");

    }
    else {

      let feedbackRef = ref(db, "feedback");

      push(feedbackRef, {
        name: name,
        email: email,
        feedback: feedback
      })
        .then(() => {

          alert("Feedback submitted successfully");

          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("feedback").value = "";

        })
        .catch((error) => {

          alert("Feedback submission failed: " + error.message);

        });
    }
  }

  return (
    <div className="Feedback-page">

      <div className="feedback-container">

        <h2>Feedback</h2>

        <label>Name:</label>

        <input
          type="text"
          id="name"
          placeholder="Enter your name"
        />

        <label>Email:</label>

        <input
          type="email"
          id="email"
          placeholder="Enter your email"
        />

        <label>Feedback:</label>

        <textarea
          id="feedback"
          rows="5"
          placeholder="Enter your feedback"
        ></textarea>

        <button onClick={HandleSubmit}>
          Submit Feedback
        </button>

        <Link to="/">
          Back to Home
        </Link>

      </div>

    </div>
  );
}

export default Feedback;