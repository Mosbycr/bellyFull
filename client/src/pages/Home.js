import React from "react";
import Mission from "../components/Mission/Mission";
import Jumbotron from "../components/Jumbotron/Jumbotron";


function Home() {
  return (
    <div className="container-fluid">
      <Jumbotron />
      <Mission />
    </div>
  );
}

export default Home;
