import React from "react";
import "./style.css";
// import ClaimBtn from "../ClaimBtn/ClaimBtn";


function DonationsCard(props){
 if(props.claimed === false){

   return(
   <div className="card mx-auto" >
        <div className="card-header">

        <h5>{props.restaurant}</h5>
       {/* <h5 className="card-title">Restaurant Name</h5> */}
        </div>
       <ul className="list-group list-group-flush">
           <li className="list-group-item">{props.listItems}</li>
           <li className="list-group-item">{props.contact}</li>
      </ul>
           <div className="card-body">
             <button className = "btn btn-primary " onClick ={props.handleClaimClick}>Claim</button>     
           </div>
  </div>
   );
 } else if(props.claimed === true){
    return (
      <div className="card mx-auto">
        <div className="card-header">
          <h5 className="card-title">Restaurant Contact Info</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li className="list-group-item">{props.restaurant}</li>
          <li className="list-group-item">{props.contact}</li>
          <li className="list-group-item">Items Claimed: {props.listItems}</li>
        </ul>
      </div>
    );
 }else {
   return(
     <div></div>
   )
 }
}

export default DonationsCard;