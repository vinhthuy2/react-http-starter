import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';
import registerServiceWorker from './registerServiceWorker';
import Axios from 'axios';

Axios.interceptors.request.use(
  request => {
    console.log(request);
    return request;
  },
  err => {
    console.log(err);
    return Promise.reject(err);
  }
);

Axios.interceptors.response.use(
  res => {
    console.log(res);
    return res;
  },
  err => {
    console.log(err);
    return Promise.reject(err);
  }
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
