import '../styles/navbar.scss'
import logo from '../logo.svg'
import React from "react"

function Navbar() {
  return(
    <>
      <nav>
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/MessageBoard">MessageBoard</a></li>
          <li><a href="/Edit">Edit</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar