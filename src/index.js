import React from 'react';
// import HookApp from './components/HookApp';
// import CounterApp from './components/useState/CounterApp';
// import CustomCounter from './components/useState/CustomCounter';
// import SimpleForm from './components/useEffect/SimpleForm';
// import CustomForm from './components/useEffect/CustomForm';
import CustomHooks from './components/useFetch/CustomHooks';
import ReactDOM from 'react-dom';

ReactDOM.render(
  <React.StrictMode>
    <CustomHooks />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
