import React, {Component} from "react";

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
    //   alert("This button clicks!")
      this.setState({signIn: true});
  }

  handleRegisterClick = event => {
    //   alert("Registration click works");
      this.setState({register: true});
  }

  render() {
    return (
        <div className="btnContainer text-center">
                    <button className="btn" onClick={this.handleSignInClick}>Sign In</button>
                    <button className="btn" onClick={this.handleRegisterClick}>Register</button>
        </div>
    )
  }
}

export default LoginBtns