import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import axios from 'axios'


const api = axios.create({
  baseURL: `http://localhost:3001/forms`
})


class App extends Component{

  state = {
    forms: []
  }

  formJSON = {
    name: "name2...",
    message: "message2...",
    color: "color2..."
  }

  constructor(){
    super();
    // this.getForms()
  }

  componentDidMount(){
    console.log('compenent did mount')
    this.getForms()
  }

  getForms = async () => {
    let data = await api.get('/').then(({ data }) => data)
    this.setState({ forms: data }) 
  }

  postForm = async (jsonFromForm) => {
    let res = await api.post('/', { id: 123, name: this.formJSON.name, message: this.formJSON.message, color: this.formJSON.color})
    console.log(res);
    this.getForms()
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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <form onSubmit={this.postForm} id="TheForm" class="dataForm">
          
            <input 
              placeholder="title..."
              onChange={(event) => {
                this.formJSON.name = event.target.value
              }}
            />
            <textarea 
              placeholder="message..."
              onChange={(event) => {
                this.formJSON.message = event.target.value
              }}
            />
            <input 
              type="color"
              placeholder="color..."
              onChange={(event) => {
                this.formJSON.color = event.target.value
              }}
            />

            <button type='submit'> SEND ME AWAY </button>
          </form>
        

          {this.state.forms.map(form => 
          <ul key={form._id} className='card' style={ {backgroundColor: form.color} }>

              <h2>{form.name}</h2>
              <p>{form.message}</p>
              <button onClick={() => this.deleteForm(form._id)}>x</button>
              <button onClick={() => this.patchForm(form._id, `${form.name}a`)}>a</button>

          </ul>
          )}
          
        </header>
      </div>
    )

  }
}

export default App
