import React, { useState } from 'react'

import { FaPlus } from 'react-icons/fa'
import '../styles/colorForm.scss'

import ColorMessage from './ColorMessage'

import axios from 'axios'
const api = axios.create({
  baseURL: `/forms`
})




const ColorFormFunc = () => {


  // //TODO i do not understand this 
  // const state = {
  //   forms: []
  // }

  // const constructor = ( ) => {
  // // super();
  // state={
  //   frontendData: []
  // }
  //   // this.getForms()
  // }

  // // componentDidMount(){
  // //   this.getForms()
  // // }

  const [DBMessageArray, setDBMessageArray] = useState([])

  // const getForms = async () => {
  //   let data = await api.get('/').then(({ data }) => data)
  //   setMessageArray( [DBMessageArray, data] )
  //   // setState({ forms: data }) 
  // }

  const postForm = async (event, jsonFrom) => {
    // event.preventDefault()
    let dJSON = formJSON
    let res = await api.post('/', { id: 123, name: dJSON.name, message: dJSON.message, color: dJSON.color})
    console.log(res)
    // getForms()
    // postFrontendData(dJSON)
  }

  

  // const deleteForm = async (_id) => {
  //   try{
  //     api.delete(`/${_id}`).then(res => {
  //       console.log('Deleted!!!', res)
  //       getForms()
  //     })
  //   } catch (err) {
  //     console.log(err)
  //   }
  // }

  // const patchForm = async (_id, val) => {
  //   let data = await api.patch(`/${_id}`, { name: val })
  //   console.log(data);
    
  //   getForms()
  // }

  const [messageArray, setMessageArray] = useState([])

  const postFrontendData = (event) => {
    event.preventDefault()
    document.getElementById("TheForm").reset();

    setMessageArray([formJSON, ...messageArray])
    console.log(messageArray);

    //? Save to DB
    postForm()
  }

  //TODO create recent form underneith editor to show feedback

  //? temp holder for below 'frontendData' form
  let formJSON = {
    name: "name / title",
    message: "message body...",
    color: "#445566"
  }



  return (
    
    <>
      <form onSubmit={postFrontendData} id="TheForm" className="dataForm">
        <h3>./components/ColorFormFunc.jsx</h3>
      
        <input 
          type="text"
          placeholder="title..."
          required
          onChange={(event) => {
            formJSON.name = event.target.value
          }}
        />
        <textarea 
          type="text"
          placeholder="message..."
          required
          onChange={(event) => {
            formJSON.message = event.target.value
          }}
        />
        <input 
          type="color"
          placeholder="color..."

          required
          onChange={(event) => {
            formJSON.color = event.target.value
          }}
        />

        <button type='submit'> <FaPlus/> Create Color Message </button>
      </form>

      <ul style={{listStyleType: 'none'}}>
        {messageArray.map((msg, i ) => 

          <li key={i}>
            <ColorMessage {...msg}/>
          </li>
        )}
      </ul>
    </>
  )
}

export default ColorFormFunc