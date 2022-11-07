import ReactDOM from "react-dom/client";
import App from "./App";

class BudgetAppBudget extends HTMLElement {
  connectedCallback() {
    const mountPoint = document.createElement("div");
    // probably need to attach to shadow once root styles are figured out
    this.appendChild(mountPoint);
    const root = ReactDOM.createRoot(mountPoint);
    root.render(<App />);
  }
}
customElements.define("budget-app-budget", BudgetAppBudget);
