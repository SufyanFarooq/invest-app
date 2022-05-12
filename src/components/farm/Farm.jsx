import React, {useState} from 'react'
import './Farm.css';
import {VscDebugBreakpointDataUnverified} from 'react-icons/vsc'
function Farm() {
    let [isLocked, setisLocked]= useState("locked")
  return (

    <div className='farmMain'>
        <div className='container'>
            <div className='text-center farmParagraph'>
            <p className='text-danger firstfarmParagraph'>Grab your Plan</p>
            <p className='text-light fw-bold secondfarmParagraph'>GET PROFIT</p>
            <p className='text-light fs-5'>Choose the plan that most fit your needs.</p>
            <p className='text-light fs-5'>Minimum deposit 1 MATIC with no maximum limit.</p>
            </div>
            <div className='farmBtnGroup'>
            <div className='farmBtn' style={{width:"30%"}}>
                <div className={isLocked === "locked" ? 'btn btn-light fs-4'  : 'btn btn-outline-secondary fs-4'}
                onClick={()=>{
                    setisLocked("locked")
                }}
                >Locked</div>
                <div className={isLocked === "unlocked" ? 'btn btn-light fs-4 ms-2'  : 'btn btn-outline-secondary fs-4 ms-2'}
                 onClick={()=>{
                    setisLocked("unlocked")
                }}
                >UnLocked</div>

            </div>
            </div>
            {
                isLocked === "locked"? 
                <div style={{}}>
                <div  className='planCardMain'>
                    <div className='planCard'>
                        <div className='dayCard'>14 Days</div>
                        <div className='text-center'>
                            <img src="/Rookie-1.png" alt="" width={150} />
                        </div>
                        <p className='text-center text-light fs-4'>Rookie Investor (locked)</p>
                        <ul className='list-unstyled ms-2'>
                            <li className='fs-2 fw-bold text-light'><VscDebugBreakpointDataUnverified/><span className='fs-4'>Daily Profit:27.4%</span></li>
                            <li className='fs-2 fw-bold text-light'><VscDebugBreakpointDataUnverified/><span className='fs-4'>Total Profit:383.60%</span></li>
                        </ul>
                        <div className='text-center planInput'>
                            <input  className='planinput' type="number" placeholder="0" />
                        </div>
                        <div className=' mt-1 mb-3 text-center'>
                            <span className='text-light fs-5'>Earn Profit:0</span>
                        </div>
                            <div className='text-center planInput mt-4'>
                            <button className='palnBtn'>Invest</button>
                            </div>
                    </div>
                    <div className='planCard'>
                    <div className='dayCard'>21 Days</div>
                    <div className='text-center'>
                            <img src="/Advance-2.png" alt="" width={150} />
                        </div>
                        <p className='text-center text-light fs-4'>Advanced Investor (locked)</p>
                        <ul className='list-unstyled ms-2'>
                            <li className='fs-2 fw-bold text-light'><VscDebugBreakpointDataUnverified/><span className='fs-4'>Daily Profit:25.9%</span></li>
                            <li className='fs-2 fw-bold text-light'><VscDebugBreakpointDataUnverified/><span className='fs-4'>Total Profit:543.90%</span></li>
                        </ul>
                        <div className='text-center planInput'>
                            <input  className='planinput' type="number" placeholder="0" />
                        </div>
                        <div className=' mt-1 mb-3 text-center'>
                            <span className='text-light fs-5'>Earn Profit:0</span>
                        </div>
                            <div className='text-center planInput mt-4'>
                            <button className='palnBtn'>Invest</button>
                            </div>
                    </div>
                    <div className='planCard'>
                    <div className='dayCard'>28 Days</div>
                    <div className='text-center'>
                            <img src="/Expert-2.png" alt="" width={150} />
                        </div>
                        <p className='text-center text-light fs-4'>Expert Investor (locked)</p>
                        <ul className='list-unstyled ms-2'>
                            <li className='fs-2 fw-bold text-light'><VscDebugBreakpointDataUnverified/><span className='fs-4'>Daily Profit:24.4%</span></li>
                            <li className='fs-2 fw-bold text-light'><VscDebugBreakpointDataUnverified/><span className='fs-4'>Total Profit:683.20%</span></li>
                        </ul>
                        <div className='text-center planInput'>
                            <input  className='planinput' type="number" placeholder="0" />
                        </div>
                        <div className=' mt-1 mb-3 text-center'>
                            <span className='text-light fs-5'>Earn Profit:0</span>
                        </div>
                            <div className='text-center planInput mt-4'>
                            <button className='palnBtn'>Invest</button>
                            </div>
                    </div>
                </div>
            </div>
            : 
            <div style={{}}>
                <div  className='planCardMain'>
                    <div className='planCard'>
                        <div className='dayCard'>14 Days</div>
                        <div className='text-center'>
                            <img src="/Rookie-1 (1).png" alt="" width={150} />
                        </div>
                        <p className='text-center text-light fs-4'>Rookie Investor (unlocked)</p>
                        <ul className='list-unstyled ms-2'>
                            <li className='fs-2 fw-bold text-light'><VscDebugBreakpointDataUnverified/><span className='fs-4'>Daily Profit:27.4%</span></li>
                            <li className='fs-2 fw-bold text-light'><VscDebugBreakpointDataUnverified/><span className='fs-4'>Total Profit:383.60%</span></li>
                        </ul>
                        <div className='text-center planInput'>
                            <input  className='planinput' type="number" placeholder="0" />
                        </div>
                        <div className=' mt-1 mb-3 text-center'>
                            <span className='text-light fs-5'>Earn Profit:0</span>
                        </div>
                            <div className='text-center planInput mt-4'>
                            <button className='palnBtn'>Invest</button>
                            </div>
                    </div>
                    <div className='planCard'>
                    <div className='dayCard'>21 Days</div>
                    <div className='text-center'>
                            <img src="/Advance-1.png" alt="" width={150} />
                        </div>
                        <p className='text-center text-light fs-4'>Advanced Investor(unlocked)</p>
                        <ul className='list-unstyled ms-2'>
                            <li className='fs-2 fw-bold text-light'><VscDebugBreakpointDataUnverified/><span className='fs-4'>Daily Profit:25.9%</span></li>
                            <li className='fs-2 fw-bold text-light'><VscDebugBreakpointDataUnverified/><span className='fs-4'>Total Profit:543.90%</span></li>
                        </ul>
                        <div className='text-center planInput'>
                            <input  className='planinput' type="number" placeholder="0" />
                        </div>
                        <div className=' mt-1 mb-3 text-center'>
                            <span className='text-light fs-5'>Earn Profit:0</span>
                        </div>
                            <div className='text-center planInput mt-4'>
                            <button className='palnBtn'>Invest</button>
                            </div>
                    </div>
                    <div className='planCard'>
                    <div className='dayCard'>28 Days</div>
                    <div className='text-center'>
                            <img src="/Expert-1.png" alt="" width={150} />
                        </div>
                        <p className='text-center text-light fs-4'>Expert Investor (unlocked)</p>
                        <ul className='list-unstyled ms-2'>
                            <li className='fs-2 fw-bold text-light'><VscDebugBreakpointDataUnverified/><span className='fs-4'>Daily Profit:24.4%</span></li>
                            <li className='fs-2 fw-bold text-light'><VscDebugBreakpointDataUnverified/><span className='fs-4'>Total Profit:683.20%</span></li>
                        </ul>
                        <div className='text-center planInput'>
                            <input  className='planinput' type="number" placeholder="0" />
                        </div>
                        <div className=' mt-1 mb-3 text-center'>
                            <span className='text-light fs-5'>Earn Profit:0</span>
                        </div>
                            <div className='text-center planInput mt-4'>
                            <button className='palnBtn'>Invest</button>
                            </div>
                    </div>
                </div>
            </div>
            }
            
        </div>
    </div>
  )
}

export default Farm