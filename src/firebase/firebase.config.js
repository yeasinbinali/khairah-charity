// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkteAtKDUnpUyJ-9AhLNTGqO-VYJb9hjU",
  authDomain: "khairah-charity.firebaseapp.com",
  projectId: "khairah-charity",
  storageBucket: "khairah-charity.appspot.com",
  messagingSenderId: "124686162668",
  appId: "1:124686162668:web:b9788b6f493230715f63c9"
  // apiKey: process.env.REACT_APP_apiKey,
  // authDomain: process.env.REACT_APP_authDomain,
  // projectId: process.env.REACT_APP_projectId,
  // storageBucket: process.env.REACT_APP_storageBucket,
  // messagingSenderId: process.env.REACT_APP_messagingSenderId,
  // appId: process.env.REACT_APP_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


export default app;