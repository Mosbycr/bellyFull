import React from "react";
// import LogInForm from "../loginForm";

function LoginBtns(props) {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     signIn: false,
  //     register: false,
  //   };
    
  //   this.handleSignInClick = this.handleSignInClick.bind(this);
  //   this.handleRegisterClick = this.handleRegisterClick.bind(this);
  // }

  // handleSignInClick = event => {
  //     this.setState({signIn: true, register: false});
  // }

  // handleRegisterClick = event => {
  //     this.setState({register: true, signIn: false});
  // }


    return (
      <div>
        <div className="btnContainer text-center">
          <button className="btn" onClick={props.handleSignInClick}>
            Sign In
          </button>
          <button className="btn" onClick={props.handleRegisterClick}>
            Register
          </button>
        </div>
        <div className="LoginForms">
          {/* <LogInForm
            signIn={this.state.signIn}
            register={this.state.register}
          /> */}
        </div>
      </div>
    );
  }

export default LoginBtns