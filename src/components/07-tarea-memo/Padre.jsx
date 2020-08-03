import React, { useCallback } from 'react';
import Hijo from './Hijo';
import { useState } from 'react';

const Padre = () => {
  const numeros = [2, 4, 6, 8, 10];
  const [valor, setValor] = useState(0);

  //   const incrementar = (num) => {
  //     setValor(valor + num);
  //   };

  const increment = useCallback(
    (num) => {
      setValor((v) => v + num);
    },
    [setValor],
  );

  return (
    <div>
      <h1>Padre</h1>
      <p> Total: {valor} </p>

      <hr />

      {numeros.map((n) => (
        <Hijo key={n} numero={n} incrementar={increment} />
      ))}
      {/* <Hijo /> */}
    </div>
  );
};

export default Padre;
