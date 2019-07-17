import React, { Component } from "react";
import Welcome from "../components/WelcomeSignIn";
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
      password: "",
      organizationlogIn: []
    };


    this.handleSignInClick = this.handleSignInClick.bind(this);
    this.handleRegisterClick = this.handleRegisterClick.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleOrganizationFormSubmit = this.handleOrganizationFormSubmit.bind(
      this);
      // this.handleLogIn = this.handleLogIn.bind(this);
    // this.handleCreateText = this.handleCreateText.bind(this);
  };

  // componentDidMount(){
  //   this.loadOrganization();
  // }

  // loadOrganization=()=>{
  //   API.getOrganization()
  //   .then(res=>
  //     this.setState({organizationlogIn:res.data})
  //     )
  //     .catch(err=> console.log(err));
  // };

  // handleLogIn = event => {
  //   if (this.state.loginEmail === this.state.organizationlogIn.email){
  //    console.log("it matches!")     
  //     window.location.href = "/donations";


  //   } else{
  //     console.log("email doesn't match")

  //   }

  // };


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
    console.log(this.state.isShow);

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
                handleOrganizationFormSubmit={this.handleOrganizationFormSubmit}
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
                handleLogIn={this.handleLogIn}
                // handleCreateText={this.handleCreateText}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LogIn;
