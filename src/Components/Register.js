import React from "react";
import add from "../Img/addAvatar.png";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={add} alt="add" />
            <span>Add an avatar</span>
          </label>
          <button>Sign up</button>
        </form>
        <p>
          You do have an account? <Link to="/signin">Login</Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Register;
