import React, { useState } from 'react';
import CustomHooks from '../useFetch/CustomHooks';
const UseRef = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <h1> useRef </h1>
      <hr />
      {show && <CustomHooks />}
      <button className='btn btn-primary mt-5' onClick={() => setShow(!show)}>
        Show / Hide
      </button>
    </>
  );
};

export default UseRef;
