import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import products from './mocks/products.json'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { addDoc, collection, getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDBNxfNPkFk_cR4oNrf5Ki09PZLlCzyFc",
  authDomain: "indumentarialrm.firebaseapp.com",
  projectId: "indumentarialrm",
  storageBucket: "indumentarialrm.appspot.com",
  messagingSenderId: "533324369370",
  appId: "1:533324369370:web:76199176ae491608fa04e3",
  measurementId: "G-KPFWYVXW8B"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

//Metodo para agregar elementos se usa 1 vez y se borra
// const db = getFirestore(app);

// products.forEach((product)=>{
//   addDoc(collection (db, 'products'), product)
//   .then((docRef =>{
//     console.log('Documento Agregado con Id:', docRef.id)
//   }))
//   .catch((error)=> {
//     console.error('eeror al agregar documento', error)
//   })
// })


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)