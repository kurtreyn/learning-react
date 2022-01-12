import React, { useState } from 'react';
import ComponentOne from './ComponentOne';
import ComponentTwo from './ComponentTwo';
import ComponentThree from './ComponentThree';

export default function MainComponent() {
  const [name, setName] = useState('Sally');
  const [nameTwo, changeName] = useState('Kurt');

  return (
    <>
      {/* <ComponentOne name={name} setName={setName} /> */}
      {/* <ComponentOne name={nameTwo} changeName={changeName} /> */}
      <ComponentTwo />
    </>
  );
}
