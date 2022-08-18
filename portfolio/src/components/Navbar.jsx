import React from 'react'
import { FaBars, FaTimes } from "react-icons/fa"
import logo from "../assets/logo.png"


function Navbar() {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#18191c]'>
      <div>
        <img src={logo} style={{ width: "45px" }} />
      </div>
      <div>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* Humburger */}
      <div></div>


    </div>
  )
}

export default Navbar