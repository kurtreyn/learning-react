import React, { useState } from 'react';

export default function ThingTwo(props) {
  const [state, setState] = useState({ age: 19, siblingsNum: 4 });
  const { age, siblingsNum } = state;

  const handleClick = (val) => setState({ ...state, [val]: state[val] + 1 });

  return (
    <div>
      <p>Today I am {age} Years of Age</p>
      <p>I have {siblingsNum} siblings</p>

      <div>
        <button onClick={handleClick.bind(null, 'age')}>Get older!</button>
        <button onClick={handleClick.bind(null, 'siblingsNum')}>
          More siblings!
        </button>
      </div>
    </div>
  );
}
