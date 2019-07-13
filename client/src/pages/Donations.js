import React, { Component } from "react";
import DonationsCard from "../components/DonationsCard/DonationsCard";
import ClaimedCard from "../components/ClaimedCard/ClaimedCard";
import API from "../utils/API";
import List from "../components/List"
//import { Container, Row, Col} from "../components/Container/container";
//import Jumbotron from "../components/Jumbotron/Jumbotron";
import ListItem from "../components/List";
import { Link } from "react-router-dom";



class Donations extends Component {
  state = {
    food: []
  };

  componentDidMount() {
    this.loadFood();
  }

  loadFood = () => {
    API.getFood()
    .then(res => 
      this.setState({ food: res.data})
    )
    .catch(err => console.log(err));
  };

  handleClaimClick = event =>{
       alert("Btn was clicked!!")
   }


  
render() {

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 text-center">
          <h2>Available Donations</h2>
          <hr />
          <br />
          {this.state.food.length ? (
            <List>
              {this.state.food.map(food => (
                <ListItem key={food._id}>
                  <Link to={"/food/" + food._id}>
                    {/* <strong>
            {food.restaurant} <br /> {food.phone}
          </strong> */}
                  </Link>
                  <DonationsCard
                    restaurant={food.restaurant}
                    contact={food.phone}
                    listItems={food.donations}
                    claimed={food.claimed}
                    handleClaimClick={this.handleClaimClick}
                  />
                </ListItem>
              ))}
            </List>
          ) : (
            <h3>No Results to Display</h3>
          )}
        </div>
        <div className="col-md-6 text-center">
          <h2>Claimed</h2>
          <hr />
          <br />
          {this.state.food.length ? (
            <List>
              {this.state.food.map(food => (
                <ListItem key={food._id}>
                  <Link to={"/food/" + food._id}>
                    {/* <strong>
            {food.restaurant} <br /> {food.phone}
          </strong> */}
                  </Link>
                  <ClaimedCard
                    restaurant={food.restaurant}
                    contact={food.phone}
                    listItems={food.donations}
                    claimed={food.claimed}
                    handleClaimClick={this.handleClaimClick}
                  />
                </ListItem>
              ))}
            </List>
          ) : (
            <h3>No Results to Display</h3>
          )}
          {/* <DonationsCard /> */}
        </div>
      </div>
    </div>
  );
}
}
export default Donations;



