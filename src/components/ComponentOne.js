import React from 'react';

const ComponentOne = (props) => {
  const nameCompOne = 'Steven';

  const changeName = () => {
    if (props.name === 'Sally') {
      props.setName('Ally');
    } else {
      props.setName('Sally');
    }
  };

  const changeNameTwo = () => {
    if (props.name === 'Kurt') {
      props.changeName('Johnathan');
    } else {
      props.changeName('Kurt');
    }
  };

  return (
    <div>
      <h1>This is Component One</h1>
      <p>
        Hello {props.name} and {nameCompOne}
      </p>
      <button onClick={changeNameTwo}>Change Name</button>
    </div>
  );
};

export default ComponentOne;
