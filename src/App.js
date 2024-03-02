import React from 'react'
import NavBar from './components/Navbar'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import './App.css' 
import Home from './components/Home'
import FetchData from './components/FetchData'

const App = () => {
  return (
    <div className='app-page'>
      <Router>
        <NavBar/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/general' element={<FetchData category='general'/>}/>
          <Route exact path='/science' element={<FetchData category='science'/>}/>
          <Route exact path='/technology' element={<FetchData category='technology'/>}/>
          <Route exact path='/india' element={<FetchData country='in'/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
