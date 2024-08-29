import React from 'react'

function Project( { styling, image } ) {
  return (
    <a href={image} className={styling}>
      <img className='img' src = { image } />
    </a>
  )
}

export default Project;