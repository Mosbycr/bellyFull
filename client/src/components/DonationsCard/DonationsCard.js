import React from "react";
import "./style.css";
import ClaimBtn from "../ClaimBtn/ClaimBtn";

function DonationsCard(){
    return(
    <div className="card mx-auto" >
         <div className="card-header">
         <h5 className="card-title">Restaurant Name</h5>
         </div>
        <ul className="list-group list-group-flush">
            <li className="list-group-item">List of Items</li>
            <li className="list-group-item">Contact info</li>
       </ul>
            <div className="card-body">
              <ClaimBtn/>        
            </div>
   </div>
    );
}

export default DonationsCard;