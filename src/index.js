import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createStore} from 'redux';
import rootReducer from './reducers';
import {Provider} from 'react-redux';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

const store = createStore(rootReducer); // create redux store, passing in our root reducer

const root = ReactDOM.createRoot(document.getElementById('root')); 
// use Provider to allow us to use state and dispatch to our React components
root.render(
  <Provider store={store}> 
    <App/>
  </Provider>
);

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDG9bkkHC-rrd03MHVSk_UHgLm8BKfEVFo",
  authDomain: "pearl-project-e3abe.firebaseapp.com",
  projectId: "pearl-project-e3abe",
  storageBucket: "pearl-project-e3abe.appspot.com",
  messagingSenderId: "406860985735",
  appId: "1:406860985735:web:2f67b124a3f14c7d8b4f22"

};

// Initialize Firebase
initializeApp(firebaseConfig);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();