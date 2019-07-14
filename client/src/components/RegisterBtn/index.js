import React, {Component} from "react";
import "./style.css";

class RegisterBtn extends Component{
    constructor() {
        super();
        this.state = {
          isShow: false
        }
        this.createText = this.createText.bind(this);
      }

      createText(){
          this.setState({isShow: true})
      }

      render(){
          return(
              <div className="RegisterBtn">
                  <button onClick= {this.createText}>Register</button>
        {this.state.isShow && <h5>Thank you for signing up. To view donations, <a className = "signUp" href= "/donations">click here.</a></h5>}
              </div>
          )
      }
}

export default RegisterBtn;