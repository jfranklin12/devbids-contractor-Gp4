import './Navbar.css'

export default function Navbar() {
  return (
    <nav className="nav">
      <div className="hamburger-menu">
        <input id="menu__toggle" type="checkbox" />
        <label className="menu__btn" for="menu__toggle">
          <span></span>
        </label>

        <ul className="menu__box">
          <li>
            <a className="menu__item" href="#">
              Profile
            </a>
          </li>
          <li>
            <a className="menu__item" href="#">
              Contracts
            </a>
          </li>
          <li>
            <a className="menu__item" href="#">
              Login
            </a>
          </li>
          <li>
            <a className="menu__item" href="#">
              Register
            </a>
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
              <a href="#">Profile</a>
            </li>
            <li>
              <a href="#">Contracts</a>
            </li>
          </ul>
        </div>
        <div className="login-links">
          <ul className="nav-links">
            <li>
              <a href="#">Login</a>
            </li>
            <li>
              <a href="#">Register</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
