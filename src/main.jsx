import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

export const server = "https://mern-crud-0p6k.onrender.com/api/user";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
