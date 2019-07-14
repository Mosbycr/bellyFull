import React, { Component } from "react";
import Welcome from "../components/WelcomeSignIn";
import LoginBtns from "../components/LoginBtns";
import LogInForm from "../components/loginForm";


class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signIn: false,
      register: false
    };

    this.handleSignInClick = this.handleSignInClick.bind(this);
    this.handleRegisterClick = this.handleRegisterClick.bind(this);
  }

  handleSignInClick = event => {
    this.setState({ signIn: true, register: false });
  };

  handleRegisterClick = event => {
    this.setState({ register: true, signIn: false });
  };

  render() {
    console.log(this.state.signIn, this.state.register);
    return (
      <div className="container-fluid">
        <div className="logIn">
          <div className="row">
            <div className="col-12">
              <Welcome />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <LoginBtns
                handleSignInClick={this.handleSignInClick}
                handleRegisterClick={this.handleRegisterClick}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <LogInForm 
                signIn= {this.state.signIn}
                register={this.state.register}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LogIn;
