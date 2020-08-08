import React from "react";
import "./card.css";

function Card(props) {
    return (
      <div className="card">
        <div className="img-container">
          <img alt={props.name} src={props.picture.large} />
        </div>
        <div className="content">
          <ul>
            <li>
              <strong>Name:</strong> {props.name.first} {props.name.last}
            </li>
            <li>
              <strong>Phone:</strong> {props.phone}
            </li>
            <li>
              <strong>Cell:</strong> {props.cell}
            </li>
            <li>
              <strong>Email:</strong> {props.email}
            </li>
          </ul>
        </div>
      </div>
    );
  }
  
  export default Card;