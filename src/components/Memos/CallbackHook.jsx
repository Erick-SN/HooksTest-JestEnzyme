import React, { useState, useCallback } from 'react';
import ShowIncrement from './ShowIncrement';
const CallbackHook = () => {
  const [couter, setCounter] = useState(0);
  //   const increment = () => {
  //     setCounter(couter + 1);
  //   };
  const increment = useCallback(() => {
    setCounter((c) => c + 1);
  }, [setCounter]);
  return (
    <>
      <h1>Counter: {couter}</h1>
      <ShowIncrement increment={increment} />
    </>
  );
};

export default CallbackHook;
