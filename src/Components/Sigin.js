import React from "react";
import { Link } from "react-router-dom";

const Sigin = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="title">Login</span>
        <form>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <button>Sign up</button>
        </form>
        <p>
          Create a Account <Link to="/register">Register</Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Sigin;
