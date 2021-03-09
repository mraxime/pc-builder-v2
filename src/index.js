import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from '../src/redux/configueStore';
import '../src/styles/globals.css';
import App from './App';

ReactDOM.render(
  <StrictMode>
    {/* redux */}
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);
