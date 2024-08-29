import React from 'react'
import comic from '../Images/iliwaad.png'
import { Link } from 'react-router-dom';
function ComicSection() {
  return (
    <div className='comic__section'>
      <h1 className="comic__section--title">A preview of my comic!</h1>
      <div className="comic__section--prev">
        <div className="comic__section--desc">
          <h2 className="comci__section--sub" style={{paddingBottom:"16px"}}>Here is a sneak peak of my comic!</h2>
          <p className='comic-description'>Tram and Smaxel, once young vigilantes, are thrust into a cosmic adventure when their planet is obliterated. After Tram gains extraordinary fire-based powers from a mysterious alien parasite, the duo embarks on a journey through space. Facing numerous challenges and threats, they assemble a diverse team to help them navigate the vast and perilous universe.</p>
          <Link to="/comic-page" className='comic__section--button'>See Comic!</Link>
        </div>
        <img className ="comic__section--img img" src={comic} alt="" />
      </div>
    </div>
  )
}

export default ComicSection;