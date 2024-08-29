import React, { useState } from "react";
import page2 from '../Comics/Page2.png';
import page3 from '../Comics/Page3.png';
import page4 from '../Comics/Page4.png';
import page5 from '../Comics/Page5.png';
import bigThreat2 from '../Comics/big threat 2.png';
import bigThreat3 from '../Comics/big threat 3.png';
import bigThreat4 from '../Comics/big threat 4.png';
import bigThreat from '../Comics/big threat.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function ComicPage() {
  const first = [page2, page3];
  const second = [page4, page5];
  const third = [bigThreat, bigThreat2];
  const fourth =[bigThreat3, bigThreat4];
  const imageSets = [first, second, third, fourth];
  const [currentImgs, setCurrentImgs] = useState(first);
  const [currentIndex, setCurrentIndex] = useState(0);
  

  function goNext() {
    const nextIndex = (currentIndex + 1) % imageSets.length;
    setCurrentIndex(nextIndex);
    setCurrentImgs(imageSets[nextIndex]);
  }

  function goPrev() {
    const nextIndex = (currentIndex - 1) % imageSets.length;
    setCurrentIndex(nextIndex);
    setCurrentImgs(imageSets[nextIndex]);
  }

  return (
    <>
      <h1 className="hidden_text">To view this page use a bigger device! It will improve your experience.</h1>
      <div className="comic__page">
        <div className="book">
          <div className='comicpage comicpage--left'>
            <img className="img" src={currentImgs[0]} alt="" />
          </div>
          <div className='comicpage comicpage--right'>
            <img className="img" src={currentImgs[1]} alt="" />
          </div>
        </div>
        <div className="arrow">
          <button className="arrows" onClick={() => goPrev()}>
            <FontAwesomeIcon className='comic__arrow' icon="fa-solid fa-arrow-left" />
          </button>
          <button className="arrows" onClick={() => goNext()}>
            <FontAwesomeIcon className='comic__arrow' icon="fa-solid fa-arrow-right" />
          </button>
        </div>
      </div>
    </>
    
  )
}

export default ComicPage