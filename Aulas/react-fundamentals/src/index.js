import React from 'react';
import ReactDOM from 'react-dom';

import GlobalStyle from './styles/global';

import App from './components/App';

ReactDOM.render(
  <>
    <App />
    <GlobalStyle /> 
  </>,
  document.getElementById('root'),
)