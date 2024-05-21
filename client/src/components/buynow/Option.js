import React from "react";
import "./option.css";

const Option = () => {
  return (
    <div className="options">
      <select>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
      </select>
      <p className="op">Delete</p>
      <p className="op">Save or Later</p>
      <p className="op">See more</p>
    </div>
  );
};

export default Option;
