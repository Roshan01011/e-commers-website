import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./products.css";

const Products = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    async function fetchItems() {
      const url = "https://dummyjson.com/products";
      try {
        let response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        let data = await response.json();
        console.log("API response:", data);
        setItems(data.products);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching items:", err);
        setError(err.message);
        setLoading(false);
      }
    }
    fetchItems();
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, { ...product, quantity: 1 }]);
    console.log("Added to cart:", product);
  };

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
      <div className="container">
        <div className="products">
          {items.map((product) => (
            <div key={product.id} className="product">
              <div className="product-image-wrapper">
                <img
                  src={product.images[0]}
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
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="cart">
          <h2>Cart</h2>
          {cart.length === 0 ? (
            <p>Your cart is empty</p>
          ) : (
            cart.map((product, index) => (
              <div key={index} className="cart-item">
                <span>{product.title}</span> - <span>${product.price}</span> -{" "}
                <span>Quantity: {product.quantity}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default Products;
