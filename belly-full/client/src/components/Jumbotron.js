import React from "react";
function Jumbotron (){
    return (
        <div
        style={{ background: "grey", height: 300, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron">
  <h1 className="display-4">Hello, world!</h1>
  <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
  </div>
        
    );
    
}
export default Jumbotron;