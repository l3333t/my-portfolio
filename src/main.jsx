import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";  // Важно импортировать Tailwind!

import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
