import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import "./pages.css";

const Electronic = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchItems() {
      const url = "https://fakestoreapi.com/products/category/electronics";
      try {
        let response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json();
        console.log("API response:", data);
        setItems(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching items:", err);
        setError(err.message);
        setLoading(false);
      }
    }
    fetchItems();
  }, []);

  if (loading) {
    return (
      <div className="container">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container">
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="products">
          {items.map((product) => (
            <div key={product.id} className="product">
              <div className="product-image-wrapper">
                <img
                  src={product.image}
                  alt={product.title}
                  className="product-img"
                />
              </div>
              <div className="product-details">
                <h2 className="product-title">{product.title}</h2>
                <p className="product-description">{product.description}</p>
                <div className="product-price">
                  <h3>${product.price}</h3>
                  <Link to={`/product/${product.id}`} className="view-details">
                    View Details
                  </Link>
                  <div id="cart">
                    <a
                      href="#!"
                      data-productid={product.id}
                      className="add-to-cart"
                    >
                      Add to Cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Electronic;
