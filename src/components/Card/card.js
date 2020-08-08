import React from "react";
import "./card.css";

function Card(props) {
  return (
    <div className="card mb-3">
      <div className="row no-gutters justify-content-center align-items-center">
        <div className="col-md-4 text-center">
          <img src={props.image} className="card-img" alt={props.name.first}/>
        </div>
          <div className="col-md-4 text-center">
            <div className="card-body">
              <h5 className="card-title"><strong>{props.name.first} {props.name.last}</strong></h5>
              <p className="card-text"><strong>Phone:</strong> {props.phone}</p>
              <p className="card-text"><strong>Cell:</strong> {props.cell}</p>
              <p className="card-text"><strong>Email:</strong> {props.email}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Card;