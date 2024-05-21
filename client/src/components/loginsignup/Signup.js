import React from "react";
import "./login.css";
import { NavLink } from "react-router-dom";

const onSubmitdata = (e) => {
  let password = document.getElementById("password");
  let repassword = document.getElementById("repassword");
  if (password && repassword === !"") {
    if (password === repassword) {
      alert("Form Submitted");
      console.log("right");
    } else {
      alert("Enter same password");
      console.log("wrong");
    }
  } else {
    alert("Password field is empty");
  }
};

const Signup = () => {
  return (
    <div className="container">
      <div className="form">
        <form className="form-item">
          <div>
            <h3>Name</h3>
            <input type="text" />
          </div>
          <div>
            <h3>E-mail</h3>
            <input type="email" />
          </div>
          <div>
            <h3>Phone number</h3>
            <input type="text" />
          </div>
          <div>
            <h3>Password</h3>
            <input type="password" id="password" />
          </div>
          <div>
            <h3>Re-enter Password</h3>
            <input type="password" id="repassword" />
          </div>
          <div>
            <button type="submit" onClick={onSubmitdata}>
              Signup
            </button>
            <p>Already have an account?</p>
            <NavLink to="/login" id="login">
              login
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
