import React,{useState, useEffect} from 'react'
import './Home.css'
import {FaTelegramPlane} from 'react-icons/fa';
import {AiOutlineTwitter, AiOutlineYoutube} from 'react-icons/ai';
import {FiGithub} from 'react-icons/fi';
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
import { contractAbi, contractAddress } from '../contract';
import YoutubeModal from '../modal/YoutubeModal';
function Home() {
    let minValue = 0.1;
    let [reward, setReward]=useState(0);
    let [withdrawed, setWithdrawed]=useState(0);
    let [holdBonus, setHoldBonus]=useState(0);
    let [totalStaked, setTotalStaked]=useState(0);
    let [totalUsers, setToatlUser]=useState(0);
    let [plan, setPlan]=useState(null);
    let [account, setAccount]=useState(null);
    let [isStaked, setIsStaked]=useState(false);
    
    let [planOneChange, setPlanOneChange] = useState(0);
    let [planTwoChange, setPlanTwoChange] = useState(0);
    let [planThreeChange, setPlanThreeChange] = useState(0);

    let [planOneAmount, setPlanOneAmount] = useState(0);
    let [planTwoAmount, setPlanTwoAmount] = useState(0);
    let [planThreeAmount, setPlanThreeAmount] = useState(0);
    const investPlans = async (plan) => {
        try {
            const acc = await loadweb3()
            if (acc == "No Wallet") {
                toast.info(acc)
            } else if (acc == "Wrong Network") {
                toast.info(acc)
            } else {
                const web3 = window.web3;
                const contract = new web3.eth.Contract(contractAbi, contractAddress);
                let isStaked = await contract.methods.isStaked(acc).call()
                let userBal = await web3.eth.getBalance(acc);
                userBal = web3.utils.fromWei(userBal);
                if (!isStaked) {
                    if (plan == 1) {
                        let amount = parseFloat(planOneAmount);
                        amount = amount.toString();
                        console.log("amount", amount);
                        if (userBal >= amount) {
                            if (amount >= 0.1) {
                                amount = web3.utils.toWei(amount)
                                await contract.methods.Investing(plan).send(
                                    {
                                        value: amount,
                                        from: acc
                                    }
                                )
                                toast.success("Amout invest successed");
                            } else {
                                toast.info(`amount should be ${minValue}`)
                            }
                        } else {
                            toast.info("Insufficient funds")
                        }
                    } else if (plan == 2) {
                        let amount = parseFloat(planTwoAmount);
                        amount = amount.toString();
                        console.log("amount", amount);
                        if (userBal >= amount) {
                            if (amount >= 0.1) {
                                amount = web3.utils.toWei(amount)
                                await contract.methods.Investing(plan).send(
                                    {
                                        value: amount,
                                        from: acc
                                    }
                                )
                                toast.success("Amout invest successed");
                            } else {
                                toast.info(`amount should be ${minValue}`)
                            }
                        } else {
                            toast.info("Insufficient funds")
                        }
                    } else if (plan == 3) {
                        let amount = parseFloat(planThreeAmount);
                        amount = amount.toString();
                        console.log("amount", amount);
                        if (userBal >= amount) {
                            if (amount >= 0.1) {
                                amount = web3.utils.toWei(amount)
                                await contract.methods.Investing(plan).send(
                                    {
                                        value: amount,
                                        from: acc
                                    }
                                )
                                toast.success("Amout invest successed");
                                getData()
                            } else {
                                toast.info(`amount should be ${minValue}`)
                            }
                        } else {
                            toast.info("Insufficient funds")
                        }
                    }
                } else {
                    toast.info(`Alredy staked in plan ${plan}. Please unstake amount and try again`)
                }
            }
        } catch (error) {
            toast.error("Transaction cancel")
            console.error("error while invest paln", error);
        }
    }

    const unsatake = async() => {
        try {
            let acc = await loadweb3()
            if (acc == "No Wallet") {
                toast.info(acc)
            } else if (acc == "Wrong Network") {
                toast.info(acc)
            } else {
                const web3 = window.web3;
                const contract = new web3.eth.Contract(contractAbi, contractAddress);
                await contract.methods.withdrawInvestment().send({
                    from:acc
                })
                getData()
                toast.success("Amout unstaked")
            }
        } catch (error) {
            console.error("error while unstke amount", error);
        }
    }
    const withdraw = async () => {
        try {
            let acc = await loadweb3()
            if (acc == "No Wallet") {
                toast.info(acc)
            } else if (acc == "Wrong Network") {
                toast.info(acc)
            } else {
                if(reward > 0){
                    const web3 = window.web3
                    const contract = new web3.eth.Contract(contractAbi, contractAddress);
                    await contract.methods.withdrawReward(plan).send({
                        from:acc
                    })
                    getData()
                    toast.success("Reward successfully withdrawed")
                }else{
                    toast.error("No reward in your account")
                }
            }
        } catch (error) {
            console.error("error while withdraw amount", error);
        }
    }
    
  
    const getData = async () => {
        try {
            let acc = await loadweb3();
            if (acc == "No Wallet") {
                console.log(acc)
                setAccount(`${window.location.host}/?ref=${account}`)
            } else if (acc == "Wrong Network") {
                console.log(acc)
                setAccount(`${window.location.host}/?ref=${account}`)
            } else {
                setAccount(`${window.location.host}/?ref=${acc}`)
                const web3 = window.web3;
                const contract = new web3.eth.Contract(contractAbi, contractAddress);
                let isStaked = await contract.methods.isStaked(acc).call()
                setIsStaked(isStaked)
                if (isStaked) {
                let bonus = await contract.methods.holdBonus(acc).call();
                bonus = web3.utils.fromWei(bonus);
                bonus = parseFloat(bonus).toFixed(3);
                setHoldBonus(bonus)
                let invester = await contract.methods.investers(acc).call()
                console.log("withdrawed", invester);
                let rew = await contract.methods.calcReward(acc, invester.plan).call()
                // reward = reward.toString()

                rew = web3.utils.fromWei(rew);
                
                rew = parseFloat(rew).toFixed(3)
                setReward(rew)
                let rewardWithdrawed = web3.utils.fromWei(invester.rewardWithdrawed)
                rewardWithdrawed = parseFloat(rewardWithdrawed).toFixed(3);
                setWithdrawed(rewardWithdrawed)
                let totalstaked = web3.utils.fromWei(invester.TotalStakedAmount);
                // totalStaked = parseFloat(totalStaked).toFixed(3);
                // console.log(totalStaked);
                setTotalStaked(totalstaked)
                setToatlUser(invester.TotalUsers)
                setPlan(invester.plan)
            }
        }
        } catch (error) {
            console.error("error while get data", error);
        }
    }

    const copyRef = () => {
        copy(account)
    }

    useEffect(() => {
        getData()

         setInterval(() => {
            getData()
        }, 5000);


    }, [])
    let [isShow, setIsShow]=useState(false);
  return (
    <div className='homeMain'>
   <div className='container'>
       {
           isShow && <YoutubeModal isShow={isShow} setIsShow={setIsShow} />
       }
       <div className='text-center home_pargraph'>
           <p className='text-light fs-2'>Automatic Matiq Dividends Earning Swap</p>
       </div>
       <div className='d-flex justify-content-center button-main mt-5 '>
           <button className='button text-light fs-5'>Contract</button>
           <button className='button text-light fs-5'>Audit Report</button>
           {/* <button className='button text-light fs-5'>Youtube</button>
           <button className='button text-light fs-5'>Telegram</button> */}
       </div>
       <div className='home_Icons pt-4'>
           
           <div className='text-light  me-3 fs-3 fw-bolder home_icon'><a href='https://t.me/+t_Mo6S19V0ExOWM1' target="_blank" className='text-light'><FaTelegramPlane/></a></div>
           <div className='text-light me-3 ms-5 fs-3 fw-bold home_icon'><AiOutlineTwitter/></div>
           <div className='text-light me-2 ms-5 fs-3 fw-bold home_icon'><FiGithub/></div>
           <div className='text-light me-2 ms-5 fs-3 fw-bold home_icon'
           onClick={()=>setIsShow(true)}
           ><AiOutlineYoutube/></div>
       </div>
       <div style={{}}>
                    <div className='planCardMain'>
                        <div className='planCard'>
                            <div className='dayCard'>14 Days</div>
                            <div className='text-center'>
                                <img src="/Rookie-1.png" alt="" width={150} />
                            </div>
                            <p className='text-center text-light fs-4'>Rookie Investor (locked)</p>
                            <ul className='list-unstyled ms-2'>
                                <li className='fs-2 fw-bold text-light'><VscDebugBreakpointDataUnverified /><span className='fs-5'>Daily Profit:20.0%</span></li>
                                <li className='fs-2 fw-bold text-light'><VscDebugBreakpointDataUnverified /><span className='fs-5'>Total Profit:420.00%</span></li>
                                <li className='fs-2 fw-bold text-light'><VscDebugBreakpointDataUnverified /><span className='fs-5'>Withdrawal at any time</span></li>

                            </ul>
                            <div className='text-center planInput'>
                                <input className='planinput' type="number" placeholder="0"
                                    onChange={(e) => {
                                        setPlanOneChange(parseFloat((e.target.value * 420.00) / 100).toFixed(2));
                                        setPlanOneAmount(e.target.value);
                                    }}
                                />
                            </div>
                            <div className=' mt-1 mb-3 text-center'>
                                <div className='text-light fs-5'>Earn Profit</div>
        
                                {
                                    planOneChange > 0 ?<div className='text-light'>{planOneChange}% after 14 days</div> : <></>
                                }
                            </div>
                            <div className='text-center planInput mt-4'>
                                {
                                   plan != 1 ?

                                   <button className='palnBtn'
                                       onClick={() => investPlans(1)}
                                   >Invest</button>
                                   :
                                   <button className='palnBtn'
                                       onClick={() => unsatake()}
                                   >Unstake</button>
                                }
                            </div>
                        </div>
                        <div className='planCard'>
                            <div className='dayCard'>21 Days</div>
                            <div className='text-center'>
                                <img src="/Advance-2.png" alt="" width={150} />
                            </div>
                            <p className='text-center text-light fs-4'>Advanced Investor (locked)</p>
                            <ul className='list-unstyled ms-2'>
                                <li className='fs-2 fw-bold text-light'><VscDebugBreakpointDataUnverified /><span className='fs-5'>Daily Profit:23.3%</span></li>
                                <li className='fs-2 fw-bold text-light'><VscDebugBreakpointDataUnverified /><span className='fs-5'>Total Profit:489.30%</span></li>
                                <li className='fs-2 fw-bold text-light'><VscDebugBreakpointDataUnverified /><span className='fs-5'>Withdrawal at the End</span></li>

                            </ul>
                            <div className='text-center planInput'>
                                <input className='planinput' type="number" placeholder="0"
                                    onChange={(e) => {
                                        setPlanTwoChange(parseFloat((e.target.value * 489.3) / 100).toFixed(2))
                                        setPlanTwoAmount(e.target.value)
                                    }}
                                />
                            </div>
                            <div className=' mt-1 mb-3 text-center'>
                                <div className='text-light fs-5'>Earn Profit</div>
                                {
                                    planTwoChange > 0 ?<div className='text-light'>{planTwoChange}% after 21 days</div> : <></>
                                }
                            </div>
                            <div className='text-center planInput mt-4'>
                            {
                            plan != 2 ?

                                   <button className='palnBtn'
                                       onClick={() => investPlans(2)}
                                   >Invest</button>
                                   :
                                   <button className='palnBtn'
                                       onClick={() => unsatake()}
                                   >Unstake</button>
                                }
                            </div>
                        </div>
                        <div className='planCard'>
                            <div className='dayCard'>21 Days</div>
                            <div className='text-center'>
                                <img src="/Expert-2.png" alt="" width={150} />
                            </div>
                            <p className='text-center text-light fs-4'>Expert Investor (locked)</p>
                            <ul className='list-unstyled ms-2'>
                                <li className='fs-2 fw-bold text-light'><VscDebugBreakpointDataUnverified /><span className='fs-5'>Daily Profit:28.6%</span></li>
                                <li className='fs-2 fw-bold text-light'><VscDebugBreakpointDataUnverified /><span className='fs-5'>Total Profit:600.60%</span></li>
                                <li className='fs-2 fw-bold text-light'><VscDebugBreakpointDataUnverified /><span className='fs-5'>Withdrawal at the End</span></li>

                            </ul>
                            <div className='text-center planInput'>
                                <input className='planinput' type="number" placeholder="0"
                                    onChange={(e) => {
                                        setPlanThreeChange(parseFloat((e.target.value * 600.6) / 100).toFixed(2))
                                        setPlanThreeAmount(e.target.value);
                                    }}

                                />
                            </div>
                            <div className=' mt-1 mb-3 text-center'>
                                <div className='text-light fs-5'>Earn Profit</div>
                                {
                                    planThreeChange >0 ? <div className='text-light'>{planThreeChange}% after 21 days</div> : <></>
                                }
                                
                            </div>
                            <div className='text-center planInput mt-4'>
                            {
                            plan != 3 ?

                                   <button className='palnBtn'
                                       onClick={() => investPlans(3)}
                                   >Invest</button>
                                   :
                                   <button className='palnBtn'
                                       onClick={() => unsatake()}
                                   >Unstake</button>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className='static-card-main row'>
                    <div className='static-card col-lg-3'>
                        <p className='text-center fs-4 fw-bold text-light'>Statistics</p>
                        <ul>
                            <li>
                                <span className='fw-bold fs-4'>
                                    <GiChaingun />
                                </span>
                                &nbsp;
                                <span className='fw-bold fs-5'>
                                    Total Staked MATIC
                                </span>
                                &nbsp;
                                &nbsp;
                                <span className='fw-bold fs-4'>{totalStaked}</span>
                            </li>
                            <li>
                                <span className='fw-bold fs-4'>
                                    <FiUsers />
                                </span>
                                &nbsp;
                                <span className='fw-bold fs-5'>
                                    Total Users
                                </span>
                                &nbsp;
                                &nbsp;
                                <span className='fw-bold fs-4'>{totalUsers}</span>
                            </li>
                            <li>
                                <span className='fw-bold fs-4'>
                                    <VscUngroupByRefType />
                                </span>
                                &nbsp;
                                <span className='fw-bold fs-5'>
                                    Ref Reward (MATIC)
                                </span>
                                &nbsp;
                                &nbsp;
                                <span className='fw-bold fs-4'>0</span>
                            </li>
                        </ul>
                    </div>
                    <div className='withdraw-card col-lg-3'>
                        <p className='text-center fs-4 fw-bold text-light'>Withdraw</p>
                        <ul>
                            <li>
                                <span className='fw-bold fs-4'>
                                    <MdOutlineEventAvailable />
                                </span>
                                &nbsp;
                                <span className='fw-bold fs-5'>
                                    Avaliable MATIC
                                </span>
                                &nbsp;
                                &nbsp;
                                <span className='fw-bold fs-4'>{reward}</span>
                            </li>
                            <li>
                                <span className='fw-bold fs-4'>
                                    <RiLuggageDepositLine />
                                </span>
                                &nbsp;
                                <span className='fw-bold fs-5'>
                                    Withdrawn MATIC
                                </span>
                                &nbsp;
                                &nbsp;
                                <span className='fw-bold fs-4'>{withdrawed}</span>
                            </li>
                            <li>
                                <span className='fw-bold fs-4'>
                                    <FaHandHoldingUsd />
                                </span>
                                &nbsp;
                                <span className='fw-bold fs-5'>
                                    Hold Bonus
                                </span>
                                &nbsp;
                                &nbsp;
                                <span className='fw-bold fs-4'>{holdBonus}</span>
                            </li>
                        </ul>
                        <div className='text-center pb-2'>

                            <button className='palnBtn'
                            onClick={withdraw}
                            >Withdraw</button>
                        </div>
                    </div>
                    <div className='ref-card col-lg-5'>
                        <p className='text-center fs-4 fw-bold text-light'>Referral Statistics</p>
                        <ul>
                            <li>
                                <span className='fw-bold fs-4'>
                                    <GiChaingun />
                                </span>
                                &nbsp;
                                <span className='fw-bold fs-5'>
                                    Total Referral Earned
                                </span>
                                &nbsp;
                                &nbsp;
                                <span className='fw-bold fs-4'>0</span>
                            </li>
                            <li>
                                <span className='fw-bold fs-4'>
                                    <FiUsers />
                                </span>
                                &nbsp;
                                <span className='fw-bold fs-5'>
                                    Referrals
                                </span>
                                &nbsp;
                                &nbsp;
                                <span className='fw-bold fs-4'>0</span>
                            </li>
                            <li>
                                <span className='fw-bold fs-4'>
                                    {/* <VscUngroupByRefType />
                                     */}
                                    Refferal Link
                                </span>
                                &nbsp;
                                <input type="text" value={account} className='copyinput' />
                                {/* <span className='fw-bold fs-5'>
                                    Ref Reward (MATIC)
                                </span> */}
                                &nbsp;
                                &nbsp;
                                <button className='copy-btn'
                                onClick={copyRef}
                                >Copy</button>
                                {/* <span className='fw-bold fs-4'>0</span> */}
                            </li>
                        </ul>
                    </div>
                </div>
       
       </div>
        </div>
  )
}

export default Home