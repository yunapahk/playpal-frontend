import React from "react";
import './Card.css'
function Card({ name,breed,image }) {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={image} alt="" />
      </div>
      <div className="card-title">
        <div className="card-body">
          <h3>{name}</h3>
        </div>
        <div className="card-body">
          <p>{breed}</p>
        </div>
      </div>
    </div>
  );
}
export default Card;
