import React from 'react'
import Home from './Home/Home';
import About from './About/About';
import Navbar from './Navbar/Navbar';
import Farm from './farm/Farm';
import {Routes, Route} from 'react-router-dom';
function Main() {
  return (
    <React.Fragment>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/about' element={<About/>} />
        <Route exact path='/farm' element={<Farm/>}/>
        <Route path='*'  element={<div>Page Not Found</div>} />
      </Routes>
    </React.Fragment>
  )
}

export default Main