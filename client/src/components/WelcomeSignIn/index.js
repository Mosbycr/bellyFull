import React from "react";
import "./index.css";


function Welcome(){
    return (
      <div className="signinWelcome text-center">
        <h1 className="signinHeader">Welcome to Bellyfull!</h1>
        <h2 className="secondHeader">
          Let's fight Richmond's hunger crisis and reduce waste
        </h2>
        <p className="welcomeMsg">
          Sign in to connect with local restaurants. <br /> New here? Register your
          organization and start connecting today.
        </p>
      </div>
    );
}

export default Welcome