import '../styles/navbar.scss'
import logo from '../logo.svg'
import React from "react"

import ColorMsgCarousel from './ColorMsgCarousel'

function TrippyBgs() {
  return(

    <div className="trippy-1">

      {/* // * 3 ------------------------------------ */}
      <div className="pyro">
        <div className="before"></div>
        <div className="after"></div>
      </div>

      {/* // * 4 ------------------------------------ */}
      <div className="snowflakes" aria-hidden="true">
        <div className="snowflake"> ❅ </div>
        <div className="snowflake"> 🥳 </div>
        <div className="snowflake"> 👾 </div>
        <div className="snowflake"> 👽 </div>
        <div className="snowflake"> 😈 </div>
        <div className="snowflake"> ☠️ </div>
        <div className="snowflake"> 👀 </div>
        <div className="snowflake"> 👅 </div>
        <div className="snowflake"> 🐸 </div>
        <div className="snowflake"> 🦑 </div>
        <div className="snowflake"> 🦥 </div>
        <div className="snowflake"> 🌚 </div>
        <div className="snowflake"> ☀️ </div>
        <div className="snowflake"> 🔥 </div>
        <div className="snowflake"> 🌟 </div>
        <div className="snowflake"> 🥺 </div>
        <div className="snowflake"> 😩 </div>
      </div>

      {/* // * 5 ------------------------------------ */}
      {/* <div id="lamp">
        <div id="top"></div>
          <div id="glass">
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
          </div>
        <div id="bottom"></div>
      </div> */}

      <ColorMsgCarousel />
    </div>

  )
}

export default TrippyBgs