import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDt-1McMEJpHuBwj6ZV7ILXMM3RxyVsgdw",
    authDomain: "jje-muebles.firebaseapp.com",
    projectId: "jje-muebles",
    storageBucket: "jje-muebles.appspot.com",
    messagingSenderId: "1061870281661",
    appId: "1:1061870281661:web:15b742fab9ad3eda32e8d4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
)