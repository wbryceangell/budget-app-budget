import "./App.css";
import IncomeBar from "./components/IncomeBar";

function App() {
  return (
    <div className="App">
      <header className="AppHeader">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="AppLink"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <IncomeBar amount={100} spent={95.5} />
      </header>
    </div>
  );
}

export default App;
