import React from "react";
import { NavLink } from "react-router-dom";
import "./login.css";

const Login = () => {
  return (
    <div className="container">
      <div className="form">
        <form className="form-item">
          <div>
            <h3>E-mail</h3>
            <input type="email" />
          </div>

          <div>
            <h3>Password</h3>
            <input type="password" id="password" />
          </div>

          <div>
            <button type="submit">Login</button>
            <p>Don't have an account?</p>
            <NavLink to="/signup" id="login">
              signup
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
