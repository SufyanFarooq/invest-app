import React from 'react'
import Home from './Home/Home';
import About from './About/About';
import NavigationBar from './Navbar/Navbar';
import Farm from './farm/Farm';
import {Routes, Route} from 'react-router-dom';
import PopupModal from './modal/PopupModal';
function Main() {
  return (
    <React.Fragment>
      <NavigationBar/>
      <PopupModal/>
      <Routes>
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/about' element={<About/>} />
        <Route exact path='/dashboard' element={<Farm/>}/>
        <Route path='*'  element={<div>Page Not Found</div>} />
      </Routes>
    </React.Fragment>
  )
}

export default Main