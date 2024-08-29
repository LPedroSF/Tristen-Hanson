import React from 'react'
import { Link } from 'react-router-dom'
import about from '../Images/about_img.png'
import wave from '../Assets/wave.png'

function About() {
  return (
      <div className='about'>
        <img src={ wave } alt="About Image" className='wave'/>
        <div className="about__container">
          <div className='about__content'>
            <img src={ about } alt="About Image" className='about__img'/>
            <div className="about__text">
              <h1 style={{paddingBottom:"8px", fontSize: "32px"}}>A little About Me!</h1>
              <p className='about__desc'>An innately creative individual, with a genuine passion for graphic arts and expressing myself through the medium of digital illustration.<span className='about__opt'>Technologically literate, highly experienced in using image manipulation applications to an excellent standard for several tasks, including both photo editing and digital drawing and painting. A perceptive, empathic communicator, able to work successfully alone or as an effective member of a team; I am looking for an entry-level Graphic Artist or Design role or another role within a diverse and inclusive business, that would allow me to fully realise my talent and aid an organisation in meeting and exceeding its aims. </span></p>
              <Link className='contact__button button' to="/contact">Contact me</Link>
            </div>
          </div>  
        </div> 
      </div>
  )
}

export default About