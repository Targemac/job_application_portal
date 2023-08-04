import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const ThankYou = () => {
  return (
    <div className="thankYou">
      <FaCheckCircle className="check-icon" />

      <h2>Thank You</h2>

      <p>
        You have successfully applied to{" "}
        <Link to="/">Fullstack Web Developer</Link>
      </p>

      <div className="actionLinks">
        <Link to="/">Create Profile</Link>
        <Link to="/">Back to Search</Link>
      </div>
    </div>
  );
};

export default ThankYou;
