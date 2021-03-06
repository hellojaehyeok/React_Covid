import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app.jsx';
import Covid from './service/covidData.json';

// const covid = new Covid(process.env.REACT_APP_COVID_API_KEY);
const covid = Covid.body.items.reverse();

ReactDOM.render(
  <React.StrictMode>
    <App covid={covid}/>
  </React.StrictMode>,
  document.getElementById('root')
);

