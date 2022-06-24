import React from 'react';
import createRoot from 'react-dom/client'

import { BrowserRouter } from 'react-router-dom';


import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk'

import { rootReducer } from './reducers/rootReducer';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

const store = configureStore({
  reducer: rootReducer, 

})


const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
  <Provider store={store} >
    <BrowserRouter>
      <div className="wrapper">
      <App />
      </div>
    </BrowserRouter>
  </Provider>
  </React.StrictMode>,
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
