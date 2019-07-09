import React, {Component} from "react";
import LogInForm from "../loginForm";

class LoginBtns extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signIn: false,
      register: false,
    };
    
    this.handleSignInClick = this.handleSignInClick.bind(this);
    this.handleRegisterClick = this.handleRegisterClick.bind(this);
  }

  handleSignInClick = event => {
      this.setState({signIn: true, register: false});
  }

  handleRegisterClick = event => {
      this.setState({register: true, signIn: false});
  }

  render() {
    return (
      <div>
        <div className="btnContainer text-center">
          <button className="btn" onClick={this.handleSignInClick}>
            Sign In
          </button>
          <button className="btn" onClick={this.handleRegisterClick}>
            Register
          </button>
        </div>
        <div className="LoginForms">
          <LogInForm
            signIn={this.state.signIn}
            register={this.state.register}
          />
        </div>
      </div>
    );
  }
}

export default LoginBtns