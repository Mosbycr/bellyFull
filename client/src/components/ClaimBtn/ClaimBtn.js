import React, {Component} from "react";
import "./style.css";

class ClaimBtn extends Component{

   handleClaimClick = event =>{
       alert("Btn was clicked!!")
   }

    render(){
        return(
            <button className = "btn btn-primary " onClick ={this.handleClaimClick}>Claim</button>


        )

    

}

}


export default ClaimBtn;