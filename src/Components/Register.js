import React, { useState } from "react";
// import add from "../Img/addAvatar.png";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../misc/firebase";

const Register = () => {
  const [error, seterror] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();

    // const displayname = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res);
    } catch (error) {
      seterror(error);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="display name" />
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />
          {/* <input style={{ display: "none" }} type="file" id="file" />
          <label htmlFor="file">
            <img src={add} alt="add" />
            <span>Add an avatar</span>
          </label> */}
          <button>Sign up</button>
          {error && <span>Something went wrong</span>}
        </form>
        <p>
          You do have an account? <Link to="/signin">Login</Link>{" "}
        </p>
      </div>
    </div>
  );
};

export default Register;
