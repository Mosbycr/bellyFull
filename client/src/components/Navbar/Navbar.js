import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <ul>
        <li>
      <a className="navbar-brand" href="/">
        Home  | 
      </a>
      </li>
      <li>
      <a className="navbar-brand" href="/login">
        Log In |
      </a>
      </li>
      <li>
      <a className="navbar-brand" href="/about">
        About |
      </a>
      </li>
      </ul>
    </nav>
  );
}

export default Navbar;
