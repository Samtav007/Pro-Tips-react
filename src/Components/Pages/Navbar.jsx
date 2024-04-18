import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";

export default function Nav() {
  return (
    <nav className="nav">
      <div className="navbar">
        <div className="left">
          <Link className="text" to="/">
            Kalvium❤️
          </Link>
        </div>
        <div className="right">
          <Link className="text" to="./contactpage">
            Contacts
          </Link>
          <Link className="text" to="./aboutpage">
            Registration Form
          </Link>
        </div>
      </div>
    </nav>
  );
}
