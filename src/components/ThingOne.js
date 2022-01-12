import React from 'react';

export default function ThingOne(props) {
  const changePicture = () => {
    if (props.image === props.imageA) {
      props.setImage(props.imageB);
    } else {
      props.setImage(props.imageA);
    }
  };

  return (
    <div>
      <img src={props.image} />
      <button onClick={changePicture}>Change Image</button>
    </div>
  );
}
