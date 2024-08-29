import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom';
import CV from '../Assets/CV.pdf'

function Landing() {
  return (
    <div className='landing'>
      <h1 className='landing__title'>Hello!</h1>
      <h1 className='purple landing__title'>I'm Tristen Hanson!</h1>
      <p className='landing__subtitle'>I'm an <span className='purple'> artistic graphic designer</span> with </p>
      <a target='_blank' href="https://www.instagram.com/swallavo/">
        <FontAwesomeIcon  className="landing__link button" icon="fa-brands fa-instagram" />
      </a>
      <a target='_blank' href="https://www.linkedin.com/in/tristen-hanson-a0936721a/">
        <FontAwesomeIcon  className="landing__link button" icon="fa-brands fa-linkedin" />
      </a>
      <Link target='_blank' to= { CV }>
        <FontAwesomeIcon target="_blank" className="landing__link button" icon="fa-solid fa-file" />
      </Link>
      
    </div>
  )
}

export default Landing