// import React, { useState } from "react";
// import "./Navbar.css";
// import LoginSignupModal from "../LoginSignUpModal/LoginSignupModal";
// import Button from "react-bootstrap/Button";
// import { NavLink } from "react-router-dom";

// export default function Navbar() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => {
//     setShow(true);
//   };

//   return (
//     <nav className="nav">
//       <LoginSignupModal
//         show={show}
//         handleClose={handleClose}
//       ></LoginSignupModal>
//       <div className="hamburger-menu">
//         <input id="menu__toggle" type="checkbox" />
//         <label className="menu__btn" for="menu__toggle">
//           <span></span>
//         </label>

//         <ul className="menu__box">
//           <li>
//             <NavLink to="/profile" className="menu__item">
//               Profile
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/profile" className="menu__item">
//               Contracts
//             </NavLink>
//           </li>
//           <li>
//             <NavLink to="/profile">Login or Sign Up</NavLink>
//           </li>
//         </ul>
//       </div>
//       <div className="navbar">
//         <div className="company-name">
//           <h1>Devbids</h1>
//         </div>
//         <div className="user-links">
//           <ul className="nav-links">
//             <NavLink to="/profile">Profile</NavLink>

//             <NavLink to="/profile">Contracts</NavLink>
//           </ul>
//         </div>
//         <div className="login-links">
//           <ul className="nav-links">
//             <li>
//               <Button onClick={handleShow}>Login or Sign Up</Button>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }

import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import NavDropdown from "react-bootstrap/NavDropdown";
import LoginSignupModal from "../LoginSignUpModal/LoginSignupModal";
import "./Navbar.css";

function NavBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };

  return (
    <Navbar bg="dark" variant="dark" className="py-4" expand="lg">
      <LoginSignupModal
        show={show}
        handleClose={handleClose}
      ></LoginSignupModal>
      <Container>
        <Navbar.Brand href="/home" className="logo">
          DevBids
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/profile" className="nav-text">
              Contracts
            </Link>
            <Link to="/profile" className="nav-text">
              Profile
            </Link>
            <Link to="/contactUs" className="nav-text">
              Contact Us
            </Link>
            <Button onClick={handleShow}>Login or Sign Up</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
