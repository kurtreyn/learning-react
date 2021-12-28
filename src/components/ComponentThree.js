import React from 'react';

const ComponentThree = (props) => {
  const name = 'Steve';

  return (
    <div>
      <h1>This is Component Three</h1>
      <p>
        Hello {props.name} and {name}
      </p>
    </div>
  );
};

export default ComponentThree;
