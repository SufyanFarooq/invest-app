import React, {useState, useEffect} from 'react'
import './Navbar.css';
import {Link} from 'react-router-dom';
import {Navbar, Nav, Container} from 'react-bootstrap';
import {loadweb3} from '../../api';
import axios from 'axios';
function NavigationBar() {
  let [account, setAccount]=useState("Connect Wallet");
  const getWallet = async ()=> {
    let acc =await loadweb3()
    console.log("acc", acc);
    setAccount(acc);
    
  }
  let [maticPrice, setMaticPrice]=useState(0);
  const getData = async () => {
    try {
        let {data:{USDT}} =await axios.get("https://min-api.cryptocompare.com/data/price?fsym=MATIC&tsyms=USDT")
        setMaticPrice(USDT)
    } catch (error) {
      console.error("error while get data", error);
    }
  }
  useEffect(()=>{
    getData()
    getWallet()
  },[])
  return (
      <div className='NavContainer'>
        <Navbar  variant="light" bg="light" >
  <Container>
    <Navbar.Brand><Link to="/"><img src="/logo.png" alt="" width="100px" /></Link></Navbar.Brand>
    <div className='ms-auto nav-btn'>
      <div className='text-light maticPrice'>MATIC Price &nbsp;<span className=''>{maticPrice}</span></div>
      &nbsp;
      <button className=' text-light maticPrice ms-xl-5 ms-md-3'
      onClick={getWallet}
      >
       {account === "No Wallet" 
                      ? "No Wallet"
                      : account === "Connect Wallet"
                      ?"Connect Wallet"
                      :account === "Wrong Network"
                      ? "Connect to pollygon"
                      : account.substring(0,5)+ "..." + account.substring(account.length - 5)}
        
        </button>
    </div>
  </Container>
</Navbar>
        {/* <Navbar collapseOnSelect expand="lg" className='navbar' bg='dark' variant="dark">
  <Container>
  <Navbar.Brand >
    <Link to="/"><img src="/logo.png" alt="" width="80px" /></Link>
    
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <div className='ms-auto'>
      <span className='text-light'>MATIC Price &nbsp;<span className='fw-bold'>{maticPrice}</span></span>
      <button className='btn btn-light ms-5'
      onClick={getWallet}
      >
       {account === "No Wallet" 
                      ? "No Wallet"
                      : account === "Connect Wallet"
                      ?"Connect Wallet"
                      :account === "Wrong Network"
                      ? account
                      : account.substring(0,5)+ "..." + account.substring(account.length - 5)}
        
        </button>
    </div>
  </Navbar.Collapse>
  </Container>
</Navbar> */}
        {/* <div className='text-light logo-nav ms-5'>
          <img src="/logo.png" alt="" width={100} />
        </div> */}
        <div>
    <div className=' mainNav '>
        
    <div className='nav'>
        <div className='text-light  me-5 fs-5 navItem'><Link style={{textDecoration:"none", color:"#fff"}} to='/'>Home</Link></div>
        <div className='text-light  me-5 fs-5 navItem'><Link  style={{textDecoration:"none", color:"#fff"}} to='/dashboard'>Dashboard</Link></div>
        <div className='text-light  me-2 fs-5 navItem'><Link  style={{textDecoration:"none", color:"#fff"}} to='/about'>About</Link></div>
    </div>
</div>
        </div>
</div>
  )
}

export default NavigationBar