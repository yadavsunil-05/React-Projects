import "./NavBar.css"
import logo from "../assets/logo.png"
import { useState } from "react"

function NavBar() {

  const [flag, setFlag] = useState(true)

  const showNavbar = () => {
    setFlag(!flag)
  }

  return (
    <div className="navbar">
      <div className={flag ? "sidebar" : "sidebar active"}>
        <div className="toggle-btn" onClick={showNavbar}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul>
          <h5 className="catogaries">Categories</h5>
          <li>All News</li>
          <li>Business</li>
          <li>Entertainment</li>
          <li>health</li>
          <li>science</li>
          <li>technology</li>
          <li>sports</li>
        </ul>
      </div>
      <div className="logo">
        <img src={logo} alt="logo" className="logo-img" />
      </div>
    </div>
  )
}

export default NavBar