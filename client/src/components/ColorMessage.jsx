import '../styles/colorMsg.scss'
import { FaTrashAlt } from 'react-icons/fa'

import React, { useState, useEffect } from "react"

import axios from 'axios'
const api = axios.create({
  baseURL: `/forms`
})

const ColorMessage = (props) => {

  const {_id, date, color, name, message, getForms} = props

  ColorMessage.defaultProps = {
    _id: '000',
    name: 'name / title',
    message: 'the body of the message',
    color: 'orange'
  }

  const deleteForm = async (_id) => {

    // console.log(_id);

    try{
      api.delete(`/${_id}`).then(res => {
        console.log('Deleted!!!', res)
        getForms()
      })
    } catch (err) {
      console.log(err)
    }
  }

  const patchForm = async (_id, val) => {
    let data = await api.patch(`/${_id}`, { name: val })
    console.log(data);
    
    // getForms()
  }

  return (
    <>
      <div className='card' key={props._id} style={ {backgroundColor: props.color} }>

        <h2>{props.name}</h2>

        <p>{props.message}</p>

        <ul>
          <li className="msgMeta">{props._id}</li>
          <li className="msgMeta">{props.date}</li>
        </ul>

        <button onClick={() => deleteForm(props._id)}> <FaTrashAlt/> </button>
        <button onClick={() => patchForm(props._id, `${props.name}a`)}>a</button>
      </div>
    </>
  )
}

export default ColorMessage