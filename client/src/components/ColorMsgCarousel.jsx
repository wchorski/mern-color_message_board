import '../styles/carousel.scss'
import { React, useState, useEffect} from "react"
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { FaEye } from 'react-icons/fa'
import { helperFunName, helperRandomReadTime, helperArticleType, helperRandomColor } from '../helpers';

import ColorMessage      from './ColorMessage'

const ColorMsgCarousel = () => {

  function createFakeMessage(){
    const clrMsgJSON = {
      name: helperFunName(),
      message: helperFunName(),
      date: Date.now(),
      color: helperRandomColor(),
    }
    return(clrMsgJSON)
  }

  const [msgCarousel, setMsgCarousel] = useState([])
  
  const addMessage = (event) => {
    
    setMsgCarousel(prevMsgCar => [createFakeMessage(), ...msgCarousel])
    // console.log(createFakeMessage().name + ' : ' + createFakeMessage().color + ' : ' + createFakeMessage().message)    
  }

  const [seconds, setSeconds] = useState(1)
  useEffect(() => {

    const timer = setInterval(() => {
      setSeconds(seconds + 1)
      addMessage()
      // nextImage()
    }, 8000)
               // clearing interval
    return () => clearInterval(timer)
  });


  return(
    <>
      {/* <div className="carousel-container">

        <ul style={{listStyleType: 'none'}}>
          <TransitionGroup>
            {msgCarousel.slice(0,3).map((msg, i ) => {
              return(
                
                <CSSTransition key={msg.date} timeout={1000} className="msg-zero">
                <li key={i}>
                    <ColorMessage name={msg.name} message={msg.message} color={msg.color} _id={msg._id} date={msg.date} clsNms='card'/>
                </li>    
                </CSSTransition>    

              )
            })} 
          </TransitionGroup>
        </ul>

      </div> */}

      <TransitionGroup className="carousel-container">
        {msgCarousel.slice(0,4).map(msg => (
          <CSSTransition key={msg.date} timeout={2000} classNames="transition">

            <ColorMessage name={msg.name} message={msg.message} color={msg.color} _id={msg._id} date={msg.date} clsNms='card'/>

          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  )
}

export default ColorMsgCarousel