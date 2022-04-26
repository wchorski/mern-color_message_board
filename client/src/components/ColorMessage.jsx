import '../styles/colorMsg.scss'
import { FaTrashAlt } from 'react-icons/fa'

import React, { useState, useEffect } from "react"

import axios from 'axios'
const api = axios.create({
  baseURL: `/forms`
})

const ColorMessage = (props) => {


  useEffect(() => {
    // console.log('1 ColorMessage.jsx mounted');
  })

  const {_id, date, color, name, message, getForms, clsNms='card'} = props

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
      <div>
        <div className={props.clsNms} key={props._id} style={ {backgroundColor: props.color} } id={props.classID}>
          <h2>{props.name}</h2>

          <p>{props.message}</p>

          <ul>
            <li className="msgMeta">{props._id}</li>
            <li className="msgMeta">{props.date}</li>
          </ul>

          <button className='editBtn' onClick={() => deleteForm(props._id)}> <FaTrashAlt/> </button>
          <button className='editBtn' onClick={() => patchForm(props._id, `${props.name}a`)}>a</button>
          
        </div>
      </div>
    </>
  )
}

export default ColorMessage