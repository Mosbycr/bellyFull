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
      this.setState({ food: res.data, restaurant: "", phone: "", donations: ""})
    )
    .catch(err => console.log(err));
  };

  // render() {
  //   return(
  //     <Container fluid>
  //     <Row>
  //       <Col size="md-6">
  //     <Jumbotron>
  //             <h1>Books On My List</h1>
  //           </Jumbotron>
  //           {this.state.food.length ? (
  //             <List>
  //               {this.state.food.map(food => (
  //                 <ListItem key={food._id}>
  //                   <Link to={"/food/" + food._id}>
  //                     <strong>
  //                       {food.restaurant} by {food.phone}
  //                     </strong>
  //                     </Link>
  //                 </ListItem>
  //               ))}
  //             </List>
  //           ) : (
  //             <h3>No Results to Display</h3>
  //           )}
  //         </Col>
  //       </Row>
  //     </Container>
  //      );
  //     }
  //   }
      
  //  export default Donations;
  //function Donations (){
render() {
  return(
    
    <div className= "container-fluid">
     <div className= "row">
       <div className="col-md-6 text-center">
         <h2>Available Donations</h2>
         <hr></hr>
         <br></br>
{this.state.food.length ? (
  <List>
    {this.state.food.map(food => (
      <ListItem key={food._id}>
        <Link to={"/food/" + food._id}>
          <strong>
            {food.restaurant} by {food.phone}
          </strong>
          </Link>
      </ListItem>
    ))}
  </List>
) : (
  <h3>No Results to Display</h3>
)}
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
export default Donations;



