import React, { useState } from 'react';
import dogImg from '../images/dog.jpg';
import catImg from '../images/cat.jpg';

export default function ThingOne() {
  // ----THIS ALSO WORKS ----
  // const [image, setImage] = useState({ imageA: catImg });
  // const changePicture = () => {
  //   if (image.imageA === catImg) {
  //     console.log('click');
  //     setImage({ ...image, imageA: dogImg });
  //   } else {
  //     setImage({ ...image, imageA: catImg });
  //   }
  // };

  const [image, setImage] = useState(catImg);

  const changePicture = () => {
    if (image === catImg) {
      console.log('click');
      setImage(dogImg);
    } else {
      setImage(catImg);
    }
  };

  return (
    <div>
      <img src={image} />
      <button onClick={changePicture}>Change Image</button>
    </div>
  );
}
