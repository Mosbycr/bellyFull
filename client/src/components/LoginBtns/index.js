import React, {Component} from "react";

class LoginBtns extends Component {
  constructor(props) {
    super(props);
    this.state = {
      signIn: false,
      signUp: false,
    };
    // this.handleSavedBook = this.handleSavedBook.bind(this);
  }

  handleSignInClick = event => {
      alert("This button clicks!")
    //   this.setState({signIn: true});
  }

  render() {
    return (
        <div className="container-fluid text-center">
            <div className="row">
                <div className="col-12">
                    <button className="btn" onClick={this.handleSignInClick}>Sign In</button>
                    <button className="btn">Register</button>
                </div>
            </div>
        </div>
    )
  }
}

export default LoginBtns