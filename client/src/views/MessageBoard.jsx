import React, { Component } from 'react'

import Navbar       from '../components/Navbar'
import ColorMessage from '../components/ColorMessage'

import axios from 'axios'
const api = axios.create({
  baseURL: `/forms`
})

class MessageBoard extends Component {

  //TODO add 'isVisable' to  MessageBoard Component to avoid reMount code trigger
  // colormsgBoard = ({ isVisable }) => {
  //   if(isVisable){
  //     return <h1>clrmsgboard</h1>
  //   }
  //   return null
  //   // isVisable ? return <h1>hello</h1> : return null
  // }

  state = {
    forms: []
  }

  constructor(){
    super();
    // this.getForms()
  }

  componentDidMount(){
    this.getForms()
  }

  getForms = async () => {
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
    this.setState({ forms: data }) 
  }

  deleteForm = async (_id) => {
    try{
      api.delete(`/${_id}`).then(res => {
        console.log('Deleted!!!', res)
        this.getForms()
      })
    } catch (err) {
      console.log(err)
    }
  }

  patchForm = async (_id, val) => {
    let data = await api.patch(`/${_id}`, { name: val })
    console.log(data);
    
    this.getForms()
  }

  render(){

    return(
      <>
        <Navbar/>
        <h1>./views/MessageBoard.jsx</h1>
  
        <ul style={{listStyleType: 'none'}}>

          {this.state.forms.map((form, i ) => 
            <li key={i}>
              {/* //TODO use ..form */}
              <ColorMessage name={form.name} message={form.message} color={form.color} _id={form._id} date={form.date} getForms={this.getForms}/>
            </li>
          )}
        </ul>
      </>
    )
  }
}

export default MessageBoard