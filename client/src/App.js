import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Donations from "./pages/Donations";
import LogIn from "./pages/LogIn";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="pageContainer">
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
        <Footer />
      </div>
    </Router>
  );
}

export default App;
