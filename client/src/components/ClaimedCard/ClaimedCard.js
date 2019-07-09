import React from "react";
import "./style.css";

function ClaimedCard(){
    return(
    <div className="card mx-auto" >
         <div className="card-header">
             <h5 className="card-title">Contact Info</h5>
         </div>
             <ul class="list-group list-group-flush">
                 <li class="list-group-item">Item Claimed</li>
                 <li class="list-group-item">Restaurant info goes here</li>
             </ul>
    </div>
    );
}

export default ClaimedCard;