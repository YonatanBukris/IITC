import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./pages/userProvider.jsx";
import CountProvider from "./pages/CountProvider.jsx";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <CountProvider>
          <App />
        </CountProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);