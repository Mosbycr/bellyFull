import React, { Component } from "react";
import Welcome from "../components/WelcomeSignIn";
import LoginBtns from "../components/LoginBtns";
import LogInForm from "../components/loginForm";


class LogIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signIn: false,
      register: false,
      email: "",
      password: ""
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

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    // alert("submitted");
    console.log(this.state.email, this.state.password);
  }

  render() {
    console.log(this.state.email);
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
                signIn={this.state.signIn}
                register={this.state.register}
                handleSubmit={this.handleSubmit}
                handleInputChange={this.handleInputChange}
                email={this.state.email}
                password={this.state.password}
                handleFormSubmit={this.handleFormSubmit}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LogIn;
