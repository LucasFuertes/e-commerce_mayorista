import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBcrx0KmWs0r2kjw0ww5a-Nkpd5r0VVwMM",
  authDomain: "proyecto-react-98c4c.firebaseapp.com",
  projectId: "proyecto-react-98c4c",
  storageBucket: "proyecto-react-98c4c.appspot.com",
  messagingSenderId: "824895010501",
  appId: "1:824895010501:web:0cec39cad767dfbd69e2ac",
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
