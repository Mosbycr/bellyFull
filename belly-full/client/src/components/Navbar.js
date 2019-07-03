import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
        BellyFull
        </Link>
        <div>
            <ul className="navbar-nav">
            <li className="nav-item">
            <Link 
            to="/"
            className={
                window.location.pathname === "/" || window.location.pathname === "/home"
                ? "nav-link active"
                : "nav-link"
            }
            >
            Home
            </Link>
            </li>
            <li className="nav-item">
            <Link 
            to="/about"
            clasName={window.location.pathnamne === "/about" ? "nav-link active" : "nav-link"}
            >
            About
            </Link>
            </li>
            <li className="nav-item">
            <Link
            to="/donations"
            className={window.location.pathname === "/donations" ? "nav-link active" : "nav-link"}
            >
            Donations
            </Link>
            </li>
            <li className="nav-item">
            <Link
            to="/login"
            className={window.location.pathname === "/login" ? "nav-link active" : "nav-link"}
            >
            Log In
            </Link>
            </li>
            </ul>
        </div>
        </nav>
    );
}

export default Navbar;