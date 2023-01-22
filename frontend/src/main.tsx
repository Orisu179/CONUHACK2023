import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Login from "./login";
// import Intern from "./Intern";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Login />
  </React.StrictMode>
);
