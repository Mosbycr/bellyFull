import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Donations from "./pages/Donations";
import LogIn from "./pages/LogIn";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import About from "./pages/About";

function App() {
  return (
    // <div>Hello!!!</div>
    <Router>
      <div>
        <Navbar />
        <Jumbotron/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/donations" component={Donations} />
          <Route exact path="/login" component={LogIn} />
          {/* <Route component={NoMatch} /> */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
