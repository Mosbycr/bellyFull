import React, { Component } from "react";
// import Welcome from "../components/WelcomeSignIn";
import Jumbotron from "../components/Jumbotron/Jumbotron";
import LoginBtns from "../components/LoginBtns";
import LogInForm from "../components/loginForm";
import API from "../utils/API";


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
    // this.handleCreateText = this.handleCreateText.bind(this);
  };

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
    this.setState({ isShow: true });

    if (this.state.organization) {
      API.addOrganization({
        organization: this.state.organization,
        contactFirstName: this.state.contactFirst,
        contactLastName: this.state.contactLast,
        phone: this.state.phone,
        streetAddress: this.state.streetAddress,
        cityStateZipAddress: this.state.cityStateZip,
        email: this.state.email,
        password: this.state.password
      })
        .then(res =>
          console.log(res),
          this.setState({
            organization: "",
            contactFirst: "",
            contactLast: "",
            phone: "",
            streetAddress: "",
            cityStateZip: "",
            email: "",
            password: ""
          })
        )
        .catch(err => console.log(err));
    }
  };

  // handleCreateText = event => {
  //   this.setState({ isShow: true });
  // }

  render() {
    // console.log(this.state.isShow);

    return (
      <div>
        <Jumbotron>
          <div className="signinWelcome text-center">
            <h1 className="welcomeHeader">Welcome to Bellyfull!</h1>
            <h2 className="secondHeader">
              Let's fight Richmond's hunger crisis and reduce waste.
            </h2>
            <p className="welcomeMsg">
              Sign in to connect with local restaurants. <br /> New here?
              Register your organization and start connecting today.
            </p>
            <LoginBtns
              handleSignInClick={this.handleSignInClick}
              handleRegisterClick={this.handleRegisterClick}
            />
          </div>
        </Jumbotron>

        <div className="container-fluid">
          <div className="logIn">
            <div className="row">
              <div className="col-12">
                <LogInForm
                  signIn={this.state.signIn}
                  register={this.state.register}
                  handleSubmit={this.handleSubmit}
                  handleInputChange={this.handleInputChange}
                  handleOrganizationFormSubmit={
                    this.handleOrganizationFormSubmit
                  }
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
                  // handleCreateText={this.handleCreateText}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LogIn;
