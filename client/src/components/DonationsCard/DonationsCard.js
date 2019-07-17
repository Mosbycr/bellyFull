 import React from "react";
import "./style.css";


function DonationsCard(props){
 if(props.claimed === false){

   return(
   <div className="card mx-auto" >
        <div className="card-header">

        <h5>{props.restaurant}</h5>
        </div>
       <ul className="list-group list-group-flush">
           <li className="list-group-item">{props.listItems}</li>
           <li className="list-group-item">{props.contact}</li>
           <li className="list-group-item">{props.contactName}</li>
           <li className="list-group-item">{props.address}</li>
           <li><button className = "btn claimBtn" onClick ={props.handleClaimClick}>Claim</button> </li>    

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