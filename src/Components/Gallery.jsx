import React from 'react';
import Project from '../Components/Project';

function Gallery() {
  function importImgs (imgs){
    return imgs.keys().map(imgs);
  }
  const images = importImgs(require.context('../Images', false, /\.(png|jpe?g|svg)$/));

  return(
    images.map((img, index) =>
      <Project key={index} styling='gallery__item' image={ img } />
    )
  )
};

export default Gallery;