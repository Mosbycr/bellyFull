// import React, {Component} from "react";
// import "./style.css";
// import API from "../../utils/API"
// class ClaimBtn extends Component{
//     state = {
//         food: [],
//         promiseIsResolved: false     
//     };

//     componentDidMount(){
//         API.getFood().then((res => {
//             this.setState({ items: res.food})}))
//             .then(this.setState({promiseIsResolved: true}));
//     }

//    handleClaimClick = event =>{
//        alert("Btn was clicked!!")
//    }

//     render(){

//         if(!this.state.promiseIsResolved){return null}
//         else{
//         return(

//             <button className = "btn btn-primary " onClick ={this.handleClaimClick}>Claim</button>


//         )

    

// }

// }


// export default ClaimBtn;