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
      isShow: false,
      loginEmail: "",
      loginPassword: "",
      organization: "",
      contactFirst: "",
      contactLast: "",
      phone: "",
      streetAddress: "",
      cityStateZip: "",
      email: "",
      password: ""
    };

    this.handleSignInClick = this.handleSignInClick.bind(this);
    this.handleRegisterClick = this.handleRegisterClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleOrganizationFormSubmit = this.handleOrganizationFormSubmit.bind(
      this);
    this.handleCreateText = this.handleCreateText.bind(this);
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

  handleOrganizationFormSubmit = event => {
    event.preventDefault();
    // alert("submitted");
  };

  handleCreateText = event => {

    // alert("register clicked");
    this.setState({ isShow: true });
  }

  render() {
    // console.log(this.state.loginPassword);
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
                handleOrganizationFormSubmit={this.handleFormSubmit}
                loginEmail={this.state.loginEmail}
                loginPassword={this.state.loginPassword}
                organization={this.state.organization}
                contactFirst={this.state.contactFirst}
                contactLast={this.state.contactLast}
                phone={this.state.phone}
                streetAddress={this.state.streetAddress}
                cityStateZip={this.state.cityStateZip}
                email={this.state.email}
                password={this.state.password}
                isShow={this.state.isShow}
                handleCreateText={this.handleCreateText}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LogIn;
