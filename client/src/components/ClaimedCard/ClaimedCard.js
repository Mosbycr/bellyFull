import React from "react";
import "./style.css";

function ClaimedCard(){
    return(
    <div className="card mx-auto" >
         <div className="card-header">
             <h5 className="card-title">Contact Info</h5>
         </div>
            <div className="card-body">
                <div class="card-body">
                    <p class="card-text">Restaurant info goes here</p>
                </div>
            </div>
    </div>
    );
}

export default ClaimedCard;