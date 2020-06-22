import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const mainClass = {
  position: 'fixed',
  left: 0,
  right: 0,
  bottom: 0,
  top: 0,
};

ReactDOM.render(
  <main style={mainClass}>
    <App />
  </main>,
  document.querySelector('#root')
);
