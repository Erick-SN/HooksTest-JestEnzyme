import React from 'react';
import { useForm } from '../../Hooks/useForm';
import './effect.css';
const CustomForm = () => {
  const [value, inputHandleChange] = useForm({
    name: '',
    email: '',
    password: '',
  });
  const { name, email, password } = value;
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(value);
  };
  return (
    <>
      <h1>CustomEffect</h1>
      <hr />
      <div className='form-group'>
        <form onSubmit={onSubmit}>
          <input
            autoComplete='off'
            className='form-control'
            type='text'
            name='name'
            onChange={inputHandleChange}
            value={name}
          />
          <input
            autoComplete='off'
            className='form-control'
            type='email'
            name='email'
            onChange={inputHandleChange}
            value={email}
          />
          <input
            autoComplete='off'
            className='form-control'
            type='password'
            name='password'
            onChange={inputHandleChange}
            value={password}
          />
          <button className='btn btn-primary' type='submit'>
            Save
          </button>
        </form>
      </div>
    </>
  );
};

export default CustomForm;
