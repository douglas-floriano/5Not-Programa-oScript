import React from 'react';
import ReactDOM from 'react-dom';

// import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter } from 'react-router-dom'

import './index.css';
import App from './components/App/App.js';

ReactDOM.render(
  <BrowserRouter>

    <App />

  </BrowserRouter>,



  document.getElementById('root')
);
