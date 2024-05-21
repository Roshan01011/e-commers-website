import React from "react";
import "./footer.css";
const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="content">
          <div className="getTOKnowUs">
            <ul>
              <h3>Get to know us</h3>
              <li>About Us</li>
              <li>Careers</li>
              <li>Press Release</li>
            </ul>
          </div>
          <div className="connectWithUs">
            <ul>
              <h3>Connect with us</h3>
              <li>Facebook</li>
              <li>X</li>
              <li>Instagram</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
