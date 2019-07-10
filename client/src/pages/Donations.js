import React, { Component } from "react";
import DonationsCard from "../components/DonationsCard/DonationsCard";
import ClaimedCard from "../components/ClaimedCard/ClaimedCard";
import API from "../utils/API";
import List from "../components/List/List"


class Donations extends Component {
  state = {
    food: [],
    restaurant: "",
    phone: "",
    donations: ""
  };

  componentDidMount() {
    this.loadFood();
  }

  loadFood = () => {
    API.getFood()
    .then(res => 
      this.setState({ books: res.data, restaurant: "", phone: "", donations: ""})
    )
    .catch(err => console.log(err));
  };

  render() {
    return(
      <div className= "container-fluid">
       <div className= "row">
         <div className="col-md-6 text-center">
           <h2>Available Donations</h2>
           <hr></hr>
           <br></br>
           <List>

           </List>
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
}
// function Donations (){
//   return(
//     <div className= "container-fluid">
//      <div className= "row">
//        <div className="col-md-6 text-center">
//          <h2>Available Donations</h2>
//          <hr></hr>
//          <br></br>
//          <DonationsCard/>
//        </div>
//        <div className = "col-md-6 text-center">
//          <h2>Claimed</h2>
//          <hr></hr>
//          <br></br>
//          <ClaimedCard/>
//        </div>
//     </div>
//     </div>
//   )
// }


export default Donations;
