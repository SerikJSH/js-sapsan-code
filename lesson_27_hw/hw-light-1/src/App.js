import logo from "./logo.svg";
import "./App.css";

function App() {
  function click(event) {
    event.preventDefault();
    // console.log("event:", event.target[0].value);
    const pwd = event.target[0].value;
    if (pwd == "aSd") {
      console.log("Access garanted!");
    } else {
      console.log("Access denied!");
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br></br>
        <form onSubmit={click}>
          <input type="text" />
          <button placeholder="input the password">Ok</button>
        </form>
      </header>
    </div>
  );
}

export default App;
