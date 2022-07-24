import React from 'react'
import { FaBars, FaTimes } from "react-icons/fa"
import logo from "../assets/logo.gif"


function Navbar() {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#18191c]'>
      <div>
        <img src={logo} style={{ width: "50px" }} />
      </div>
    </div>
  )
}

export default Navbar