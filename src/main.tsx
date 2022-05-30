import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/global.css";
import { App } from "./App";
import { AuthProvaider } from "./contexts/auth";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AuthProvaider>
      <Router>
        <App />
        <ToastContainer />
      </Router>
    </AuthProvaider>
  </React.StrictMode>
);
