import React from 'react';

const ComponentOne = (props) => {
  const name = 'Billy';

  return (
    <div>
      <h1>This is Component One</h1>
      <p>From Component One: const name = {name}</p>
      <p>From Component One: props.name={props.name}</p>
    </div>
  );
};

export default ComponentOne;
