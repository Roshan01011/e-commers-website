import React from "react";
import Banner from "./Banner";
import Products from "./Products";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Banner />
      <Products />
    </div>
  );
};

export default Home;
