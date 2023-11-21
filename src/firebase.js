// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDsEvH6F7bVaVPwLg8dGVLYL2h86oWJJ1s",
  authDomain: "react-disney-plut-app.firebaseapp.com",
  projectId: "react-disney-plut-app",
  storageBucket: "react-disney-plut-app.appspot.com",
  messagingSenderId: "567844019965",
  appId: "1:567844019965:web:7681daedda45309495a894",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
