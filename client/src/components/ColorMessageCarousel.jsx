import React, { Component } from 'react'
import logo from '../logo.svg'
import '../App.css'
import axios from 'axios'

const api = axios.create({
  baseURL: `/forms`
})

class ColorMessageCarousel extends Component {
  state = {
    forms: []
  }


  constructor(){
    super();
  }

  componentDidMount(){
    this.getForms()
  }

  getForms = async () => {
    let data = await api.get('/').then(({ data }) => data)
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

    return (
      
      <>
        <h2>--ColorMessageCarousel.jsx--</h2>
        {/* {this.state.forms.map(form => 
          <ul key={form._id} className='card' style={ {backgroundColor: form.color} }>

            <h2>{form.name}</h2>
            <p>{form.message}</p>
            <button onClick={() => this.deleteForm(form._id)}>x</button>
            <button onClick={() => this.patchForm(form._id, `${form.name}a`)}>a</button>

          </ul>
        )} */}
      </>
    )

  }
}

export default ColorMessageCarousel