import React from 'react';
import Small from './Small';
import { useCounter } from '../../Hooks/useCounter';
const Momorize = () => {
  const { counter, increment } = useCounter(10);
  return (
    <>
      <h1>
        Counter <Small value={counter} />
      </h1>
      <hr />
      <button className='btn btn-primary' onClick={() => increment()}>
        +1
      </button>
    </>
  );
};

export default Momorize;
