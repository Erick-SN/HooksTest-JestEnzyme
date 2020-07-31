import React, { useMemo, useState } from 'react';
import { useCounter } from '../../Hooks/useCounter';

const MemoHook = () => {
  const { counter, increment } = useCounter(5000);
  const [show, setShow] = useState(true);

  const heavyProccess = (ite) => {
    for (let i = 0; i < ite; i++) {
      console.log('Here we go...');
    }
    return `${ite}`;
  };
  const memo = useMemo(() => heavyProccess(counter), [counter]);
  return (
    <>
      <h1>Memo-Hook</h1>
      <h3>
        Counter: <small>{counter}</small>
      </h3>
      <hr />
      <p> {memo} </p>
      <button
        className='btn btn-primary'
        onClick={() => {
          increment();
        }}>
        +1
      </button>
      <button className='btn btn-primary' onClick={() => setShow(!show)}>
        Hide / Show {JSON.stringify(show)}
      </button>
    </>
  );
};

export default MemoHook;
