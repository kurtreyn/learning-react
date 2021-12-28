import ComponentOne from './components/ComponentOne';
import ComponentTwo from './components/ComponentTwo';
import ComponentThree from './components/ComponentThree';
import React, { useState } from 'react';
import './style.css';

function App() {
  const nameA = 'Carol from App Component';
  const nameB = 'Janet from App Component';

  const [name, setName] = useState('Sally');

  const changeName = () => {
    setName('Sally 1');
  };

  return (
    <>
      <ComponentOne name={nameA} />
      <ComponentTwo name={nameB} />
      <ComponentThree name={name} />
    </>
  );
}

export default App;
