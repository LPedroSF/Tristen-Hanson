import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
      <div className='footer'>
        <h1>Tristen Hanson</h1>
        <h4 className='footer__subheader'>For more information do not hesitate to contact me!</h4>
        <div className="footer__links">
          <div className="line"></div>
          <div className="footer__links--container">
            <Link target='_blank' style={{color:"black"}} to="https://www.instagram.com/swallavo/">
              <FontAwesomeIcon className="footer__link button" icon="fa-brands fa-instagram" />
            </Link>
            <Link target='_blank' style={{color:"black"}} to="https://www.linkedin.com/in/tristen-hanson-a0936721a/">
              <FontAwesomeIcon  className="footer__link button" icon="fa-brands fa-linkedin" />
            </Link>
            <Link target='_blank' style={{color:"black"}} to="">
              <FontAwesomeIcon className="footer__link button" icon="fa-solid fa-file" />
            </Link>
          </div>
          <div className="line"></div>
        </div>
        <p className='copyright'>Copyright © 2024 Tristen Hanson. Produced by <a style={{color:"black"}} target="_blank" href="https://www.luisfaria.co.uk/" className=''>Luis Faria</a></p>
      </div>
    </>
      )
}

export default Footer