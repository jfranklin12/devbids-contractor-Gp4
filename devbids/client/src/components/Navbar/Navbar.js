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
import Auth from "../../utils/auth";

function NavBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    setShow(true);
  };
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <Navbar variant="dark" className="py-3 nav-container" expand="lg">
      <LoginSignupModal
        show={show}
        handleClose={handleClose}
      ></LoginSignupModal>
      <Container>
        <Navbar.Brand href="/home" className="logo">
          <h1>Devbids</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="nav-links" id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link to="/contracts" className="nav-text">
              Contracts
            </Link>
            <Link to="/contactUs" className="nav-text">
              Contact Us
            </Link>

            {Auth.loggedIn() ? (
              <>
                <Nav.Link as={Link} to="/profile" className="nav-text">
                  Profile
                </Nav.Link>
                <Nav.Link onClick={Auth.logout} className="nav-text">
                  Logout
                </Nav.Link>
                <div>Welcome {user.username}!</div>
              </>
            ) : (
              <Button onClick={handleShow}>Login or Sign Up</Button>
            )}

            {/* <Link to="/profile" className="nav-text">
              Profile
            </Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
