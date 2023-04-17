import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import {UserContext} from "./context/Context";


const currentUser = JSON.parse(localStorage.getItem("user"));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserContext.Provider value={currentUser}>
      <App />
    </UserContext.Provider>
  </React.StrictMode>
);
