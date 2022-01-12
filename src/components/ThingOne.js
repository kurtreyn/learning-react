import React from 'react';

export default function ThingOne({ image }, props) {
  // const changePicture = () => {
  //   if (props.image) {
  //     // props.setImage(props.imageB);
  //     console.log(`IMAGE is: ${props.image}`);
  //     console.log(`imageA is: ${props.imageA}`);
  //     console.log(`imageB is: ${props.imageB}`);
  //   } else {
  //     props.setImage(props.imageA);
  //   }
  // };

  const changePicture = () => {
    if (image.imageA === true) {
      // this.state.setImage(image.imageB);
      console.log(`imageA is: ${image.imageA}`);
      console.log(`imageB is: ${image.imageB}`);
    } else {
      // this.state.setImage(image.imageA);
    }
  };

  return (
    <div>
      <img src={props.imageA} />
      <button onClick={changePicture}>Change Image</button>
    </div>
  );
}
