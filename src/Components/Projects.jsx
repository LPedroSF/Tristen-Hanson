import React from 'react'
import { Link } from 'react-router-dom'
import Project from './Project'
import post1 from '../Images/post1.png'
import post2 from '../Images/post2.png'
import post3 from '../Images/post3.png'

function Projects() {
  function scrollUp() {
    window.scrollTo(0, 0)
  }

  return (
    <section id="projects">
      <div className="project__container">
        <h1 className ="title">Some of my <span className ="purple">digital marketing designs</span></h1>
        <div className="projects">
          <Project styling="project" image = { post1 }/>
          <Project styling="project" image = { post2 }/>
          <Project styling="project" image = { post3 }/>
        </div>
        <Link onClick={() => scrollUp()} to= {"/projects"} className="button project__button">
          View More!
        </Link>
      </div>
    </section>
  )
}

export default Projects