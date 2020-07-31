import React, { memo } from 'react';

const ShowIncrement = memo(({ increment }) => {
  return (
    <>
      <button onClick={() => increment()} className='btn btn-primary'>
        Increment
      </button>
    </>
  );
});

export default ShowIncrement;
