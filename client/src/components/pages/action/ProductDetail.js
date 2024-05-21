import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./pages.css"; // Import the CSS file
import Navbar from "../../Navbar/Navbar";

const ProductDetail = () => {
  const { id } = useParams();
  const [item, setItem] = useState(null);

  useEffect(() => {
    async function fetchItem() {
      const url = `https://fakestoreapi.com/products/${id}`;
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setItem(data);
      } catch (error) {
        console.error("Error fetching item:", error);
      }
    }
    fetchItem();
  }, [id]);

  if (!item) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="product">
          <img src={item.image} alt={item.title} className="product-img" />
          <div className="product-details">
            <h2 className="product-title">{item.title}</h2>
            <h3 className="product-category">{item.category}</h3>
            <p className="product-description">{item.description}</p>
            <p className="product-price">${item.price}</p>
            <button className="buy-now-button">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
