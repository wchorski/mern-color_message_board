import './App.css'

import React from 'react'

import { Routes, Route } from 'react-router-dom'
import Navbar         from './components/Navbar'
import Edit           from './views/Edit'
import Home           from './views/Home'
import MessageBoard   from './views/MessageBoard'
import Page404        from './views/Page404'


function App() {
  
  return (

    <div className="App">
    <header className="App-header">
      <Navbar/>
      <Routes>
        <Route path="*"                   element={<Page404/>} />
        <Route path='/MessageBoard'       element={<MessageBoard/>}/>  
        <Route path='/'                   element={<Home/>}/>  
        <Route path='/edit'               element={<Edit/>}/>  
      </Routes>

    </header>
    </div>
  );
}

export default App
