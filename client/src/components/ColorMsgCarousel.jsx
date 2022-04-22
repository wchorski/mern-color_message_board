import '../styles/carousel.scss'
import { React, useState, useEffect} from "react"

import { FaEye } from 'react-icons/fa'

import ColorMessage      from './ColorMessage'

const ColorMsgCarousel = () => {


  function createFakeMessage(){

    const colors = [ 'blue', 'yellow', 'orange', 'red' ]
    const randClr = Math.floor(Math.random() * colors.length)

    const msgs = [ 'Hello', 'goodbye', 'where u going', 'Rollin w/ the homies', 'message message message message message message message message message message message message message message message message message message message message message message message message message message message message message message message message message message ' ]
    const randMsg = Math.floor(Math.random() * msgs.length)

    const clrMsgJSON = {
      name: Math.floor(Math.random() * 20).toString(),
      message: msgs[randMsg],
      color: colors[randClr]
    }

    return(clrMsgJSON)
  }

  const [msgCarousel, setMsgCarousel] = useState([])
  
  const addMessage = (event) => {
    
    setMsgCarousel(prevMsgCar => [createFakeMessage(), ...msgCarousel])
    console.log(createFakeMessage().name + ' : ' + createFakeMessage().color + ' : ' + createFakeMessage().message)
    
  }
  // setInterval(addMessage, 3500)


  const [seconds, setSeconds] = useState(1)
  useEffect(() => {

    const timer = setInterval(() => {
      setSeconds(seconds + 1)
      addMessage()
    }, 3000)
               // clearing interval
    return () => clearInterval(timer)
  });

  return(
    <>
      <div className="carousel-container">
        <ul style={{listStyleType: 'none'}}>
          {msgCarousel.map((msg, i ) => 
            <li key={i}>
              <ColorMessage {...msg}/>
            </li>
          )}
        </ul>
      </div>
      

      {/* {setInterval(addMessage, 6500)} */}
    </>
  )
}

export default ColorMsgCarousel