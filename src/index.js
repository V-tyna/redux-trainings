import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './redux/rootReducer';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

const loggerMiddleware = store => next => action => next(action);

const store = configureStore({ reducer: rootReducer , middleware: [loggerMiddleware, thunk]});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
