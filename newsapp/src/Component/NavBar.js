import "./NavBar.css"
import logo from "../assets/logo.png"
import { useState } from "react"
import categories from "../Data/category"

function NavBar({ setCategory }) {

  const [flag, setFlag] = useState(true)

  const showNavbar = () => {
    setFlag(!flag)
  }

  const changeCategory = (strCategory) => {
    setCategory(strCategory)
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
          {
            categories.map(cat => (
              <li onClick={() => changeCategory(cat)}>{cat}</li>
            ))
          }
        </ul>
      </div>
      <div className="logo">
        <img src={logo} alt="logo" className="logo-img" />
      </div>
    </div>
  )
}

export default NavBar