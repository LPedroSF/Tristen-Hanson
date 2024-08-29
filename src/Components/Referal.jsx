import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

function Referal() {
  return (
    <div className='referal'>
      <h1>Interested in working with me?</h1>
      <h4 className='referal__text'>You can contact me through my socials or email.</h4>
      <div className="social__container">
        <div className="socials">
          <FontAwesomeIcon style={{fontSize: "25px"}} icon="fa-brands fa-instagram" />
          <Link className="social__link" target="_blank" to='https://www.instagram.com/swallavo/'> Swallavo </Link>
        </div>
        <div className="socials">
          <FontAwesomeIcon style={{fontSize: "25px"}} icon="fa-solid fa-envelope" />
          <p className='social__email'>tryshanson@gmail.com</p>
        </div>
      </div>
    </div>
  )
}

export default Referal;

