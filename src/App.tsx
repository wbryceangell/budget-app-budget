import "./App.css";

function App() {
  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <header
        style={{
          backgroundColor: "#282c34",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "calc(10px + 2vmin)",
          color: "white",
        }}
      >
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            color: "#61dafb",
          }}
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
