import React, { Component } from "react";
// import DonationsCard from "../components/DonationsCard/DonationsCard";

function Donations (){
  return(
    <div className= "container-fluid">
     <div className= "row">
       <div className="col-md-6 text-center">
         <h2>Available Donations</h2>
       </div>
       <div className = "col-md-6 text-center">
         <h2>Claimed</h2>
       </div>
    </div>
    </div>
  )
}

export default Donations;
