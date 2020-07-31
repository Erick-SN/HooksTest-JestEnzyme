import React, { useRef, useLayoutEffect, useState } from 'react';
import { useCounter } from '../../Hooks/useCounter';
import { useFetch } from '../../Hooks/useFetch';
import './styles.css';
const LayoutEffect = () => {
  const { counter, increment } = useCounter(1);

  const { data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`,
  );

  const { author, quote } = !!data && data[0];

  const ref = useRef();
  const [boxSize, setBoxSize] = useState();
  useLayoutEffect(() => {
    setBoxSize(ref.current.getBoundingClientRect());
  }, [quote]);

  return (
    <>
      <h1>BreakingBad Quotes Effect</h1>
      <hr />

      <blockquote className='blockquote text-right'>
        <p ref={ref} className='mb-0'>
          {quote}
        </p>
        <footer className='blockquote-footer'>{author}</footer>
      </blockquote>
      <pre>{JSON.stringify(boxSize, null, 3)}</pre>
      <button onClick={() => increment()} className='btn btn-primary'>
        Next
      </button>
    </>
  );
};

export default LayoutEffect;
