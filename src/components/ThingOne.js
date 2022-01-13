import React, { useState } from 'react';
import dogImg from '../images/dog.jpg';
import catImg from '../images/cat.jpg';

export default function ThingOne() {
  const [image, setImage] = useState({ imageA: catImg, imageB: dogImg });

  const { imageA, imageB } = image;

  const changePicture = () => {
    if (imageA === imageA) {
      console.log('true');
      setImage(imageB);
    } else {
      console.log('false');
      setImage(imageB);
    }
  };

  return (
    <div>
      <img src={imageB} />
      <button onClick={changePicture}>Change Image</button>
    </div>
  );
}
