import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { UserContext } from "./context/Context";
import { GoogleOAuthProvider } from "@react-oauth/google";

const currentUser = JSON.parse(localStorage.getItem("user"));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_API_KEY}>
      <UserContext.Provider value={currentUser}>
        <App />
      </UserContext.Provider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
