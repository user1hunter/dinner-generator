import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
import { Generators } from './components/DinnerGenerator';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Generators />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
