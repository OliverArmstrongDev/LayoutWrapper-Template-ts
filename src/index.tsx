import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./containers/App";
import LayoutWrapper from "./containers/layout/LayoutWrapper";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <LayoutWrapper>
      <App />
    </LayoutWrapper>
  </React.StrictMode>
);
