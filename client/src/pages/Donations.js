import React from "react";
import DonationsCard from "../components/DonationsCard/DonationsCard";
import ClaimedCard from "../components/ClaimedCard/ClaimedCard";

function Donations (){
  return(
    <div className= "container-fluid">
     <div className= "row">
       <div className="col-md-6 text-center">
         <h2>Available Donations</h2>
         <hr></hr>
         <br></br>
         <DonationsCard/>
       </div>
       <div className = "col-md-6 text-center">
         <h2>Claimed</h2>
         <hr></hr>
         <br></br>
         <ClaimedCard/>
       </div>
    </div>
    </div>
  )
}

export default Donations;
