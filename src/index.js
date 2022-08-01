import React from 'react';
import ReactDOM from 'react-dom/client';
import './compiled/style/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import rootReducer from './reducers';
import {Provider} from 'react-redux';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {firebaseConfig} from './firebaseConfig.js' // import .gitignored file with credentials

const store = createStore(rootReducer); // create redux store, passing in our root reducer

const root = ReactDOM.createRoot(document.getElementById('root')); 
// use Provider to allow us to use state and dispatch to our React components
root.render(
  <Provider store={store}> 
    <App/>
  </Provider>
);

// Initialize Firebase
initializeApp(firebaseConfig);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();