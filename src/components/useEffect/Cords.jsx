import React, { useEffect, useState } from 'react';
const Cords = () => {
  const [cords, setCords] = useState({
    x: 0,
    y: 0,
  });
  const { x, y } = cords;
  useEffect(() => {
    const mouseMove = (e) => {
      const cords = { x: e.x, y: e.y };
      setCords(cords);
    };
    window.addEventListener('mousemove', mouseMove);
    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);
  return (
    <>
      <h3>Coords</h3>
      <p>X: {x}</p>
      <p>Y: {y}</p>
    </>
  );
};

export default Cords;
