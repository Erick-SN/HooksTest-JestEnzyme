import React from 'react';
import { useCounter } from '../../Hooks/useCounter';
import './counter.css';
const CustomCounter = () => {
  const { state, increment, decrement, reset } = useCounter(50);
  return (
    <>
      <h1>Counter Hook {state}</h1>
      <hr />
      <button onClick={() => increment(2)} className='btn'>
        +1
      </button>
      <button onClick={() => reset()} className='btn'>
        Reset
      </button>
      <button onClick={() => decrement(5)} className='btn'>
        -1
      </button>
    </>
  );
};

export default CustomCounter;
