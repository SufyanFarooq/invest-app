import React from 'react'
import './Navbar.css';
import {Link} from 'react-router-dom';
function Navbar() {
  return (
      <div className='NavContainer'>
        <div className='text-light ms-5'>
          <img src="/logo.png" alt="" width={100} />
        </div>
        <div>
    <div className=' mainNav '>
        
    <div className='nav'>
        <div className='text-light  me-5 fs-5 navItem'><Link style={{textDecoration:"none", color:"#fff"}} to='/'>HOME</Link></div>
        <div className='text-light  me-5 fs-5 navItem'><Link  style={{textDecoration:"none", color:"#fff"}} to='/farm'>FARM</Link></div>
        <div className='text-light  me-2 fs-5 navItem'><Link  style={{textDecoration:"none", color:"#fff"}} to='/about'>ABOUT</Link></div>
    </div>
</div>
        </div>
</div>
  )
}

export default Navbar