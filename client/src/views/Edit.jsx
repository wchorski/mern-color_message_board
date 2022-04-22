import {Component, React, useState} from "react"

import { FaEye } from 'react-icons/fa'

import ColorFormFunc      from '../components/ColorFormFunc'
import MessageBoard       from './MessageBoard'
import Navbar             from '../components/Navbar'

function Edit() {

  const [isVisible, setIsVisible] = useState(false)

  const isVisToggle = () =>{
    setIsVisible(prevIsVisibleValue => !prevIsVisibleValue)
  }

  return(
    <>
      <Navbar/>
      <h1>Edit.jsx</h1>

      <ColorFormFunc />



      <button onClick={isVisToggle}>{isVisible ? <p>hide all messages</p> :  <p> <FaEye/> show all messages</p>}</button>

      {isVisible && <MessageBoard />}

    </>
  )
}

export default Edit