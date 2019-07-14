import React from "react";
// import LogInForm from "../loginForm";

function LoginBtns(props) {
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
      </div>
    );
  }

export default LoginBtns