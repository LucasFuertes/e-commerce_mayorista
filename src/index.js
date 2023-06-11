import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API,
  authDomain: "proyecto-react-98c4c.firebaseapp.com",
  projectId: "proyecto-react-98c4c",
  storageBucket: "proyecto-react-98c4c.appspot.com",
  messagingSenderId: "824895010501",
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
