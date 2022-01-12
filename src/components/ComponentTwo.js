import React, { useState } from 'react';
import ThingOne from './ThingOne';
import dogImg from '../images/dog.jpg';
import catImg from '../images/cat.jpg';

const ComponentTwo = () => {
  const [imageA, setImage] = useState({ imageA: catImg, imageB: dogImg });
  // const imageB = dogImg;

  return (
    <div>
      <h1>Component Two</h1>
      <ThingOne image={imageA} setImage={setImage} />
    </div>
  );
};

export default ComponentTwo;
