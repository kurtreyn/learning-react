import React from 'react';

const ComponentTwo = (props) => {
  const name = 'Steve';

  return (
    <div>
      <h1>This is Component Two</h1>
      <p>From Component Two: const name = {name}</p>
      <p>From Component Two: props.name = {props.name}.</p>
      <p>
        In the App component there is a const nameB = Janet from App Component.
        Then: Component name=nameB (with curly brackets around nameB)
      </p>
    </div>
  );
};

export default ComponentTwo;
