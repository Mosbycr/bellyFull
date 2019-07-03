import React from "react";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <a className="navbar-brand" href="/">
          Home
        </a>
        <a className="navbar-brand" href="/donations">
          Donations
        </a>
        <a className="navbar-brand" href="/login">
          Log In
        </a>
      </nav>
    )
}



export default Navbar;