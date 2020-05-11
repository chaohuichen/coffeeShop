import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import logo from "../../images/logo.svg"
import { FaCartArrowDown } from "react-icons/fa"

function Navbar() {
  const [links, setLinks] = useState([
    { id: 1, path: "/", text: "home" },
    { id: 2, path: "/about", text: "about" },
  ])
  const [navbarOpen, setNavBar] = useState(false)
  const [css, setCSS] = useState("collapse navbar-collapse")
  const navbarHandler = () => {
    if (navbarOpen) {
      setNavBar(false)
      setCSS("collapse navbar-collapse")
    } else {
      setNavBar(true)
      setCSS("collapse navbar-collapse show")
    }
  }
  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="logo" />
        {/* https://www.iconfinder.com/icons/185113/coffee_streamline_icon
Creative Commons (Attribution 3.0 Unported);
https://www.iconfinder.com/webalys */}
      </Link>
      <button className="navbar-toggler" type="button" onClick={navbarHandler}>
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className={css}>
        <ul className="navbar-nav mx-auto">
          {links.map(link => {
            return (
              <li key={link.id} className="nav-item">
                <Link to={link.path} className="nav-link text-capitalize">
                  {link.text}
                </Link>
              </li>
            )
          })}
          <li className="nav-item ml-sm-5">
            <FaCartArrowDown className="cart-icon" />
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
