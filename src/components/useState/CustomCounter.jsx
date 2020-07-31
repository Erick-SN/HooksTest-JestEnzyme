import React from 'react';
import { useCounter } from '../../Hooks/useCounter';
import './counter.css';
const CustomCounter = () => {
  const { counter, increment, decrement, reset } = useCounter(50);
  return (
    <>
      <h1>Counter Hook {counter}</h1>
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
