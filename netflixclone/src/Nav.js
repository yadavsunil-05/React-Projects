import React, { useEffect, useState } from 'react'
import logo from "./assets/logo.png"

function Nav() {

  const [show, handleShow] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 150)
        handleShow(true)
      else
        handleShow(false)
    })

    return function () {
      window.removeEventListener("scroll")
    }
  }, [])



  return (
    <div className={show ? "nav-show navbar" : "navbar"}>
      <img src={logo} alt="" className="header-logo" />
      <button className='nav-btn'>Sign In</button>
    </div>
  )
}

export default Nav