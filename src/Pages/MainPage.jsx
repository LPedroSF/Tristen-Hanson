import React from 'react'
import Landing from '../Components/Landing'
import About from '../Components/About'
import Project from '../Components/Projects'
import ComicSection from '../Components/ComicSection'

function MainPage() {
  return (
    <div>
      <Landing />
      <About />
      <Project />
      <ComicSection />
    </div>
  )
}

export default MainPage