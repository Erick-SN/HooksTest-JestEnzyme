import React, { useState } from 'react';
import './counter.css';
const CounterApp = () => {
  const [state, setState] = useState({
    counter: 10,
    counter1: 20,
  });
  const { counter, counter1 } = state;
  return (
    <>
      <h1>Counter {counter}</h1>
      <h1>Counter-1 {counter1}</h1>
      <hr />
      <button
        className='btn btn-primary'
        onClick={(e) => {
          setState({
            ...state,
            counter: counter + 1,
            counter1: counter1 + 1,
          });
        }}>
        +1
      </button>
    </>
  );
};

export default CounterApp;
