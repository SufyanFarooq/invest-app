import React from 'react'
import './Home.css'
import {FaTelegramPlane} from 'react-icons/fa';
import {AiOutlineTwitter} from 'react-icons/ai';
import {FiGithub} from 'react-icons/fi'
function Home() {
  return (
    <div className='homeMain'>
   
       <div className='text-center home_pargraph'>
           <p className='text-light fs-2'>Automatic Matic Dividends Earning Swap</p>
           <p className='text-light fs-5'>Simply buy & hold $APE tokens to constantly 
               receive 25% $matic dividends from the MaticApe Defi swap protocol.</p>
       </div>
       <div className='d-flex justify-content-center mt-5 '>
           <button className='button text-light fs-5'>Contract</button>
           <button className='button text-light fs-5'>Audit Report</button>
       </div>
       <div className='home_Icons pt-4'>
           
           <div className='text-light  me-5 fs-3 fw-bolder home_icon'><FaTelegramPlane/></div>
           <div className='text-light me-5 ms-5 fs-3 fw-bold home_icon'><AiOutlineTwitter/></div>
           <div className='text-light me-2 ms-5 fs-3 fw-bold home_icon'><FiGithub/></div>
          
       </div>
       <div className='d-flex justify-content-evenly mt-5'>
           <div className="homeCard ">
               <div className='text-light fs-4 fw-bold'>$0</div>
               <div className='text-secondary fs-5'>APE Price</div>
           </div>
           <div className="homeCard">
               <div className='text-light fs-4 fw-bold'>0 APE</div>
               <div className='text-secondary fs-5'>Total Suupply</div>
           </div>
           <div className="homeCard">
               <div className='text-light fs-4 fw-bold'>$0</div>
               <div className='text-secondary fs-5'>Market Cap</div>

           </div>
       </div>
         
        </div>
  )
}

export default Home