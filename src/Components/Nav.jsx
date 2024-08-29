import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  const menu = document.getElementById("menu__backdrop");

  Array.from(document.getElementsByClassName("menu__links"))
    .forEach((item,index) =>{
      item.onmouseover = () => {
        menu.dataset.activeIndex = index;
      } 
    });

  function openMenu(){
    document.body.classList += " menu--open";
  }

  function closeMenu(){
    document.body.classList.remove("menu--open");
  }

  return (
    <div className="nav">
      <Link to='/' className='nav__title'>Tristen Hanson</Link>
      <div className="nav__list">  
        <Link to='/projects' className='nav__link'>Projects</Link>
        <Link to='/comic-page' className='nav__link'>Comic</Link>
        <Link to='/contact' className='nav__link'>Contact me!</Link>
      </div>
        
      <button className='nav__button' onClick={openMenu}>
        <FontAwesomeIcon icon="fa-solid fa-bars"/>
      </button>
      
      <div className="menu__backdrop">
        <div className="menu__nav-bar">
          <Link to="/" className="nav__title white">Tristen Hanson</Link>
          <button className="nav__button z3 white" onClick={closeMenu}>
            <FontAwesomeIcon icon="fa-solid fa-x" />
          </button>
        </div>
        <div className='menu__list'>   
          <Link to="/" className='menu__link' onClick={closeMenu}>Home</Link>
          <Link to="/projects" className='menu__link' onClick={closeMenu}>Projects</Link>
          <Link to="/comic-page" className='menu__link' onClick={closeMenu}>Comic</Link>
          <Link to="/contact" className='menu__link' onClick={closeMenu}>Contact me!</Link>  
        </div>
        <div className="menu__background"></div>
      </div>
      
    </div>
  )
}

export default Nav