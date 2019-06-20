import 'babel-polyfill'
import React from 'react';
import ReactDOM from 'react-dom';
import 'font-awesome/css/font-awesome.min.css';
import App from './components/App';
import Root from './Root';


ReactDOM.render(
  <Root>
    <App />
  </Root>,
  document.getElementById('root')
);
