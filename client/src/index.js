import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.scss';
import Index from './Routers/Index';
import { Provider } from 'react-redux'
import { configureStore } from './store/store';

const store = configureStore()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Index />
    </React.StrictMode>
  </Provider>
);
