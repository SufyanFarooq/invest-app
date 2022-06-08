import React, { useState, useEffect } from 'react'
import './Farm.css';
import { VscDebugBreakpointDataUnverified } from 'react-icons/vsc';
import { GiChaingun } from 'react-icons/gi';
import { FiUsers } from 'react-icons/fi';
import { VscUngroupByRefType } from 'react-icons/vsc';
import { MdOutlineEventAvailable } from 'react-icons/md';
import { RiLuggageDepositLine } from 'react-icons/ri';
import { FaHandHoldingUsd } from 'react-icons/fa';
import copy from 'copy-to-clipboard';
import { toast } from 'react-toastify';
import { loadweb3 } from '../../api';
import { contractAbi, contractAddress } from '../contract'
import axios from 'axios';
import CoinGecko from 'coingecko-api';
const CoinGeckoClient = new CoinGecko();
function Farm() {
  
    let [account, setAccount]=useState(null);
    let [maticPrice, setMaticPrice]=useState(0);
    let [marketCap, setMarketCap]=useState(0);
    let [totalSupply, setTotalSupply]=useState(0)
    const getData = async () => {
      try {
        //   let {data:{USDT}} =await axios.get("https://min-api.cryptocompare.com/data/price?fsym=MATIC&tsyms=USDT")
        let cap = await CoinGeckoClient.coins.markets();
        let filterData = cap.data?.filter((item)=>{
            return item.symbol === "matic"
        })
        setMarketCap(filterData[0].market_cap)
        setTotalSupply(parseFloat(filterData[0].total_supply))
          setMaticPrice(filterData[0].current_price)
      } catch (error) {
        console.error("error while get data", error);
      }
    }
    useEffect(()=>{
        getData()
    },[])

    // const calculate
    return (

        <div className='farmMain'>
            <div className='container'>
                <div className='farm-text row'>
                <div className='d-flex justify-content-evenly home-card-main mt-5'>
           <div className="homeCard ">
               <div className='text-light fs-4 fw-bold'>${maticPrice}</div>
               <div className='text-secondary fs-5'>MATIC Price</div>
           </div>
           <div className="homeCard">
               <div className='text-light fs-4 fw-bold'>{totalSupply.toLocaleString()} MATIC</div>
               <div className='text-secondary fs-5'>Total Suupply</div>
           </div>
           <div className="homeCard">
               <div className='text-light fs-4 fw-bold'>${marketCap.toLocaleString()}</div>
               <div className='text-secondary fs-5'>Market Cap</div>

           </div>
       </div>
                    <div className='text-center farmParagraph col-5 mt-5'>
        <p className='text-light firstfarmParagraph  mt-3 rounded-pill'>Grab your Plan</p>
                        <p className='text-light fs-5'>
                            The MATICFomo smart-contract provides the opportunity to invest any amount of MATIC (from 5 MATIC) in the contract.
                        </p>
                        <p className='text-light fs-5'>
                            Get 200% to 500% return on investment in 21  days （from 20% to 30% daily）
                        </p>
                        <p className='text-light fs-5'>
                            Min. deposit: 5 MATIC and no max. limit. Investors can withdraw the profit without any fee.
                        </p>

                    </div>
                    <div className='farm-2-graph text-center col-5 mt-5'>
                        <p className='text-light  firstfarmParagraph mt-3 rounded-pill'>
                            Important notes
                        </p>
                        <ol className='text-light fs-5'>
                            <li>
                                <p className=''>
                                    Basic interest rate (only for new deposits): +0.5% every 24 hours.
                                </p>
                            </li>
                            <li>
                                <p className=''>
                                    If users don't make a withdrawal everyday, will get extra bonus - hold bonus. Hold-bonus increase by 0.1% per day, Max. is 1.5%.
                                    if users withdraw, Hold-bonus will reset to 0.
                                </p>
                            </li>
                            <li>
                                <p className=''>
                                    Investors can close deposits early(If the plan has not expired), but there is a 20% penalty into the contract to sustain it.
                                </p>
                            </li>
                            <li>
                                <p>
                                    First 50 Investors with 2000 matic will be given an additinal bonus of 1000 Matic, Pls Send in ur Investment Pic to Telegram ID @Cryptofomomania.
                                </p>
                            </li>
                        </ol>
                    </div>
                </div>


                
          

                {/* : 
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
            } */}

            </div>
        </div>
    )
}

export default Farm