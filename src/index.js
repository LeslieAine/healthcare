import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBOVG7CuCSlAIEJm_WZ6F7c8K4swMlkZUM",
  authDomain: "teststripe-a69e4.firebaseapp.com",
  projectId: "teststripe-a69e4",
  storageBucket: "teststripe-a69e4.appspot.com",
  messagingSenderId: "15083652879",
  appId: "1:15083652879:web:4c9ff5f32a1ccb71e3a07a",
  measurementId: "G-SVPG95WJQJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);