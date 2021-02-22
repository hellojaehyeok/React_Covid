import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app.jsx';
import Covid from './service/covid';

const covid = new Covid(process.env.REACT_APP_COVID_API_KEY);

ReactDOM.render(
  <React.StrictMode>
    <App covid={covid}/>
  </React.StrictMode>,
  document.getElementById('root')
);

