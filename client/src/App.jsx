import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import ColorForm from './components/ColorForm'


function App() {
  
  return (

    <div className="App">
    <header className="App-header">

        <img src={logo} className="App-logo" alt="logo" />

        <ColorForm />

      </header>
    </div>
  );
}

export default App
