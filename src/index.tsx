import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

class BudgetApp extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement("div");
    this.appendChild(mountPoint);
    const root = ReactDOM.createRoot(mountPoint);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
}
customElements.define("budget-app", BudgetApp);
