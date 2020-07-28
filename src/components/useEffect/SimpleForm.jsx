import React, { useEffect, useState } from 'react';
import Cords from './Cords';
import './effect.css';
const SimpleForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
  });
  const { name, email } = form;
  useEffect(() => {}, []);
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <h1>Effect</h1>
      <hr />
      <div className='form-group'>
        <form>
          <input
            autoComplete='off'
            className='form-control'
            type='text'
            name='name'
            onChange={handleChange}
            value={name}
          />
          <input
            autoComplete='off'
            className='form-control'
            type='text'
            name='email'
            onChange={handleChange}
            value={email}
          />
        </form>
        {name === '123' && <Cords />}
      </div>
    </>
  );
};

export default SimpleForm;
