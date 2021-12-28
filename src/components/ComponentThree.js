import React from 'react';

const ComponentThree = (props) => {
  const name = 'Steve';

  const changeName = () => {
    if (props.name === 'Sally') {
      props.setName('Ally');
    } else {
      props.setName('Sally');
    }
  };

  return (
    <div>
      <h1>This is Component Three</h1>
      <p>
        Hello {props.name} and {name}
      </p>
      <button onClick={changeName}>Change Name Comp3</button>
    </div>
  );
};

export default ComponentThree;
