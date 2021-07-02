import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../UI/Card";
import "./Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const showMenuHandler = () => setShowMenu(!showMenu);
  return (
    <React.Fragment>
      <Card>
        <ul className="nav-menu">
          <li className="logo">MiraniCoding</li>
          <li className={showMenu ? "menuItems show" : "menuItems"}>
            <Link to="/" className="navLinks">
              Home
            </Link>
          </li>
          <li className={showMenu ? "menuItems show" : "menuItems"}>
            <Link to="/" className="navLinks">
              Products
            </Link>
          </li>
          <li className={showMenu ? "menuItems show" : "menuItems"}>
            <Link to="/" className="navLinks">
              About Us
            </Link>
          </li>
          <li className={showMenu ? "menuItems show" : "menuItems"}>
            <Link to="/" className="navLinks">
              Contact Us
            </Link>
          </li>
          <li className={showMenu ? "menuItems show" : "menuItems"}>
            <Link to="/" className="navLinks">
              Sign Up
            </Link>
          </li>

          <li className="btn">
            <Link to="/" onClick={showMenuHandler}>
              <i className={showMenu ? "fas fa-times" : "fas fa-bars"}></i>
            </Link>
          </li>
        </ul>
      </Card>
    </React.Fragment>
  );
};

export default Navbar;
