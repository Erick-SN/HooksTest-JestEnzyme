import { useState } from 'react';

export const useForm = (initialState = {}) => {
  const [value, setValue] = useState(initialState);

  const reset = () => setValue(initialState);

  const inputHandleChange = ({ target }) => {
    setValue({
      ...value,
      [target.name]: target.value,
    });
  };

  return [value, inputHandleChange, reset];
};

export default useForm;
