import '../styles/carousel.scss'
import { React, useState, useEffect} from "react"
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { FaEye } from 'react-icons/fa'
import { helperFunName, helperRandomReadTime, helperArticleType, helperRandomColor } from '../helpers';

import ColorMessage      from './ColorMessage'

import axios from 'axios'
const api = axios.create({
  baseURL: `/forms`
})

const ColorMsgCarousel = () => {


  //? ######### MONGO DB ####################
  const getForms = async () => {
    let data = await api.get('/').then(({ data }) => data)
    if(data === undefined || data.length == 0){
      console.log('no data in database')

      return this.setState({ forms: [{
        "id": 123,
        "name": "No Messages",
        "message": "Add new messages on the 'Edit' page",
        "color": "#c85151",
      }] }) 
    }
    setMsgCarousel(prevMsgCar => [data[Math.floor(Math.random() * data.length)], ...prevMsgCar])
  }

  //? #############################

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

  //? ######## TIMER ##############
  const [seconds, setSeconds] = useState(1)
  useEffect(() => {

    const timer = setInterval(() => {
      setSeconds(seconds + 1)
      // addMessage()
      getForms()
    }, 8000)
               // clearing interval
    return () => clearInterval(timer)
  });



  return(
    <>
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