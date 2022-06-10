import React, { useState } from 'react'
import Modal from 'react-bootstrap/Modal';
import './PopupModal.css'
function YoutubeModal({isShow, setIsShow}) {
  const handleClose = () => [
    setIsShow(false)
  ]
  return (
    <div>
      <Modal

        show={isShow}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton className=' modal-popup'>
          <Modal.Title id="contained-modal-title-vcenter">
           
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className=' text-dark modalHeader fw-bold'>
          <p>We will collect all the links on youtube.com
            that have reviewed our projects within 2 months from the project launch date. (JUNE 02)</p>
          <h4 className='text-center text-dark change-font fw-bolder'>Rules Introduction</h4>

          <p>
            <ul className='list-unstyled'>
              <li>
                1. We have prepared 18,500 matic for the competition as a reward.
              </li>
              <li>
                2. We will select the 5 most popular and most quality Youtube videos based on "Likes, Comments, Views and Total Referrals".
              </li>
              <li>
                3. The description of the video must have a link to the official maticfomo website.
              </li>
              <li>
              4. Youtube need to invest at least 100 MATIC.
              </li>
              <li>5. If a video has already been posted, please send the video link to @Cryptofomomania</li>
            </ul>
          </p>
          <div className='linkBorderMain'>
        <div className='linkBorder-youtube text-center'>
      <div>

        <p >
        Matic Mania Official Group:<a target="_blank" href='https://t.me/maticmaniacoin'>https://t.me/maticmaniacoin</a>
        </p>
      </div>
      <div>
        <p>
        
        FOMO Ecosystem Official Channel:<a target="_blank" href='https://t.me/fomoecosystemofficial'>https://t.me/fomoecosystemofficial</a>
        </p>
      </div>
        </div>
        </div>
          <p className='text-center'>
           <h3 className='change-font fw-bolder'> Bonus Distribution</h3>
            <div className="youtube-table">
            <table border="2" className='table-bordered'>
              <thead>
              <tr>
                <th>Rank</th>
                <th>Bonus</th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>1st</td>
                <td>10,000 MATIC</td>
              </tr>
              <tr>
                <td>2nd</td>
                <td>5,000 MATIC</td>
              </tr>
              <tr>
                <td>3rd</td>
                <td>2,000 MATIC</td>
              </tr>
              <tr>
                <td>4th</td>
                <td>1,000 MATIC</td>
              </tr>
              <tr>
                <td>5th</td>
                <td>500 MATIC</td>
              </tr>
              </tbody>
            </table>
            </div>
          </p>
          
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default YoutubeModal;