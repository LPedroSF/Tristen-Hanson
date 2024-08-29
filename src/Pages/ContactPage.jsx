import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Contact from "../Assets/contact.svg"
import { Link } from 'react-router-dom';

function MainPage() {
  return (
    <div>
      <div className="contact">
        <div className="contact__info">
          <h2 className='contact__title'>How you can contact me!</h2>
          <div className="contact__icons">
            <FontAwesomeIcon className='purple' icon="fa-solid fa-envelope" />
            <p style={{marginLeft:"16px"}}>tryshanson@gmail.com</p>
          </div>
          <div className="contact__icons">
            <FontAwesomeIcon className='purple' icon="fa-brands fa-instagram" />
            <Link target="_blank" to='https://www.instagram.com/swallavo/' className='contact__link'> Swallavo </Link>
          </div>
          <div className="contact__icons">
            <FontAwesomeIcon className='purple' icon="fa-brands fa-twitter" />
            <p className='contact__link'>Username</p>
          </div>
        </div>
        <div className="contact__img">
          <img src={Contact} />
        </div>
      </div>
    </div>
  )
}

export default MainPage