import React, { useState } from "react";
import "./Navbar.css";
import LoginSignupModal from "../LoginSignUpModal/LoginSignupModal";
import Button from "react-bootstrap/Button";

export default function Navbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  return (
    <nav className="nav">
      <LoginSignupModal
        show={show}
        handleClose={handleClose}
      ></LoginSignupModal>
      <div className="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label className="menu__btn" for="menu__toggle">
          <span></span>
        </label>

        <ul className="menu__box">
          <li>
            <Button className="menu__item" href="#">
              Profile
            </Button>
          </li>
          <li>
            <Button className="menu__item" href="#">
              Contracts
            </Button>
          </li>
          <li>
            <Button onClick={handleShow}>Login or Sign Up</Button>
          </li>
        </ul>
      </div>
      <div className="navbar">
        <div className="company-name">
          <h1>Devbids</h1>
        </div>
        <div className="user-links">
          <ul className="nav-links">
            <li>
              <Button href="#">Profile</Button>
            </li>
            <li>
              <Button href="#">Contracts</Button>
            </li>
          </ul>
        </div>
        <div className="login-links">
          <ul className="nav-links">
            <li>
              <Button onClick={handleShow}>Login or Sign Up</Button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
