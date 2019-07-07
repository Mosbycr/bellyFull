import React, { Component } from "react";
import Welcome from "../components/WelcomeSignIn";
import LoginBtns from "../components/LoginBtns";
import Form from "../components/loginForm";

class LogIn extends Component {
  render() {
    return (
      <div className= "container-fluid">
        <div className="row">
          <div className="col-12">
            <Welcome />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <LoginBtns />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Form />
          </div>
        </div>
      </div>
    )
  }
}

export default LogIn;
