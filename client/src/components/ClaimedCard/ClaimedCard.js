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
          <li className="list-group-item "><p className= "itemsClaimed">Items Claimed:</p>{props.listItems}</li>
          <li className="list-group-item"><p className= "itemsClaimed">Contact Name:</p>{props.contactName}</li>
          <li className="lsit-group-item"><p className= "itemsClaimed">Address:</p>{props.address}</li>
        </ul> <hr></hr>
        <div className="card-body">
             <button className = "btn unclaimBtn " onClick ={props.handleUnclaimClick}>Unclaim</button>     
           </div>
      </div>
    );
  }else {
      return (
          <div></div>
      )
  }
}

export default ClaimedCard;
