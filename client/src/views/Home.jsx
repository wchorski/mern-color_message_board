import React from "react"
import Navbar       from '../components/Navbar'

function Home() {
  return(
    <>
      <Navbar/>
      <h1>Home.jsx</h1>
      <p>welcome to Color Messages</p>

      <p>make a QR code for</p>
      <a href="http://localhost:3000/Edit">http://localhost:3000/Edit</a>

      <button><a href="/edit">edit</a></button>
      <button><a href="/messages">view all messages</a></button>
    </>
  )
}

export default Home