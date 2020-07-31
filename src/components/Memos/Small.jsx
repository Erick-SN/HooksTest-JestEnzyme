import React, { memo } from 'react';
const Small = memo(({ value }) => {
  return (
    <>
      <small>{value}</small>
    </>
  );
});

export default Small;
