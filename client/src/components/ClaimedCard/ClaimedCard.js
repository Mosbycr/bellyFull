import React from "react";
import "./style.css";

function ClaimedCard(props) {
  if (props.claimed === true) {
    return (
      <div className="card mx-auto">
        <div className="card-header">
          <h5 className="card-title">Restaurant Contact Info</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">{props.restaurant}</li>
          <li className="list-group-item">{props.contact}</li>
          <li className="list-group-item">Items Claimed: {props.listItems}</li>
        </ul>
      </div>
    );
  }else {
      return (
          <div></div>
      )
  }
}

export default ClaimedCard;
