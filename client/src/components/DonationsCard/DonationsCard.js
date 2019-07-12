import React from "react";
import "./style.css";
//import ClaimBtn from "../ClaimBtn/ClaimBtn";


function DonationsCard(props){

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
              <button>Claimed</button>       
            </div>
   </div>
    );
}

export default DonationsCard;