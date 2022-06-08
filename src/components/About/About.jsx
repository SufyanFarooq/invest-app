import React from 'react'
import './About.css'
import {AiOutlineSecurityScan, AiOutlineTransaction, AiOutlinePercentage} from 'react-icons/ai';
import {BsWallet, BsCurrencyExchange} from 'react-icons/bs';
import {MdOutlineCalculate} from 'react-icons/md'
function About() {
  return (
    <div className='aboutMain'>
        <div className='container'>
            {/* <div className='text-center about-log pt-5'>
                <img src="/logo.png" alt="" width={100} />
            </div> */}
            {/* <div className=' text-center text-light'>
        <p className='mt-2 fs-3 fw-bold'>Earn Lucrative Matic Dividends From MaticApe Swap</p>
        <p className='mt-2 fs-5'>The MaticApe Swap pays $APE Token holders 25% dividends through buy and sell transactions. Holders receive their Matic dividends 
            proportionally and instantly, relative to the total $APE circulating supply.</p>
            </div> */}
            <div>
            <div className='text-center pt-5'>
                <img className='mt-5' src="/new--logo.png" alt="" width={100} />
            </div>
            <div className='d-flex justify-content-center' style={{width:"100%"}}>
            <div className= 'about_card_section'>
                <div className='aboutCard'>
                    <div className='fs-1 text-center' ><AiOutlineSecurityScan/></div>
                <p className='text-center  fs-5'>Audited Contract by Arbitech Solutions</p>
                <p className='text-center'>
                The contract is professionally audited by Arbitech Solutions and found NO backdoors and NO rugpull functions, audit report can be viewed here.
                </p>

                </div>
                <div className='aboutCard'>
                <div className='fs-1 text-center' ><BsWallet/></div>
                <p className='text-center  fs-5'>Can I send Matic directly from an Exchange?</p>
                <p className='text-center'>
                DO NOT use exchanges or you risk losing all of your deposit. First transfer it to an Polygon wallet. Use Metamask on Desktop, or Coinbase, Trust Wallet.
                </p>
                </div>
                <div className='aboutCard'>
                <div className='fs-1 text-center' ><AiOutlineTransaction/></div>
                <p className='text-center  fs-5'>Why did I not receive my tokens? Why is my transaction still pending?</p>
                <p className='text-center'>
                Please give it a few minutes for the transaction to process on the blockchain. If it still is pending, try increasing the gas limit on the transaction.
                </p>
                </div>
                <div className='aboutCard'>
                <div className='fs-1 text-center' ><AiOutlinePercentage/></div>
                <p className='text-center  fs-5'>Why is the APE Token buy price different than the sell price?</p>
                <p className='text-center'>
                The mechanics of the exchange include 15% at buys and 10% at sells , effectively agreeing to a ~25% tax of your Matic when entering into the MaticApe smart contract.
                </p>
                </div>
                <div className='aboutCard'>
                <div className='fs-1 text-center' ><MdOutlineCalculate/></div>
                <p className='text-center  fs-5'>How is the APE Token price calculated?</p>
                <p className='text-center'>
                On purchase, note that you have only had a 15% tax applied. However, the full 25% tax is reflected in the your `Holdings`
                </p>
                </div>
                <div className='aboutCard'>
                <div className='fs-1 text-center' ><BsCurrencyExchange/></div>
                <p className='text-center  fs-5'>Why don't my APE Tokens or USDT values load on the Exchange website?</p>
                <p className='text-center'>
                Please ensure you have logged into Metamask, and turned off any Ad Blockers that could interfere with the exchange. If you have multiple wallets, make sure you are logged into the right address.
                </p>
                </div>
            </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default About