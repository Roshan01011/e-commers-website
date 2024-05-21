import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";

import Home from "./components/home/Home";
import Electronic from "./components/pages/Electronic";
import Clothes from "./components/pages/Clothes";
import Login from "./components/loginsignup/Login";
import Footer from "./components/footer/Footer";
import Signup from "./components/loginsignup/Signup";
import ProductDetail from "./components/pages/action/ProductDetail";
import Cart from "./components/cart/Cart";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/electronic" element={<Electronic />} />
        <Route path="/clothes" element={<Clothes />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
