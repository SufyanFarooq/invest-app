import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal';
import './PopupModal.css';
import {AiOutlineClose} from 'react-icons/ai'
function PopupModal() {
  let [isShow, setIsShow]=useState(true);
  const handleClose = () => [
setIsShow(false)
  ]
  return (
    <div>
<Modal
size="xl"

     show={isShow}
     onHide={handleClose}
     backdrop="static"
     keyboard={false}
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <div className='modal-header text-center modal-popup' >
        <h3 className='modal-title w-100'>🎉🎉🎉CONGRATULATIONS!🎉🎉🎉</h3>
        <span className='fs-3 fw-bolder' onClick={handleClose}><AiOutlineClose/></span>

      </div>
      {/* <Modal.Header closeButton className='modal-popup px-4' 
      
      >
        <Modal.Title id="contained-modal-title-vcenter" >
<p className='fw-bolder'>
       🎉🎉🎉CONGRATULATIONS!🎉🎉🎉

</p>

  
        </Modal.Title>
      </Modal.Header> */}
      <Modal.Body className=' text-dark modalHeader'>
        <div className='text-center fs-5'>
        <p>
        With the  launch of MaticFomo , we have built a FOMO ecosystem.
        </p>
        <p className='fw-bold'>
        We decided to launch MaticFomo on the Matic network to expand our investors community.
        </p>
        <p>
          <ol>
            <li>
            The MaticFomo project will be launched on 02nd June 2022 14:00:00 UTC (https://maticmania.net/).
            </li>
            <li>
            MaticFomo's Basic Mechanism: Minimum Deposit:5 Matic , Total Profit : 200% - 500%
            </li>
          </ol>
        </p>
        <p className='fw-bold'>
        Fomo community - Become rich with us, Keep growing!
        </p>
        <p className='fw-bold'>
        SOCIAL HANDLES
        </p>
        <p>
        Matic Mania Official Group:<a target="_blank" href=' https://t.me/+t_Mo6S19V0ExOWM1'> https://t.me/+t_Mo6S19V0ExOWM1</a>
        </p>
        <p>
        FOMO Ecosystem Official Channel:<a target="_blank" href='  https://t.me/+J06nN4l01jBjZDE1'>  https://t.me/+J06nN4l01jBjZDE1</a>
        </p>
        </div>
      </Modal.Body>
    </Modal>
    </div>
  )
}

export default PopupModal