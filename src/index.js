import React from "react";
import ReactDom from "react-dom/client";

import App from "./components/App.js";
import "./index.css";

/// react v18
const root = ReactDom.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React before v18
/// ReactDom.render( <App>, root)
