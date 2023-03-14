import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  const [isShow, setIsShow] = useState(true);
  const numbers = [1, 2, 3, 4, 5];
  function handleClick(event, text) {
    console.log("You clicked the button!");
    console.log(text);
    setIsShow(!isShow);
  }
  function handleChange(event) {
    console.log(event.target.value);
  }
  function handleSubmit(event) {
    // console.log(event);
    event.preventDefault();
    console.log("Submitted!");
  }

  return (
    <div className="App">
      <button onClick={handleClick}>Click!</button>
      <button onClick={(event) => handleClick(event, "Other text")}>
        Click2!
      </button>
      <form onSubmit={handleSubmit}>
        <input type="text" className="inputText" onChange={handleChange} />
      </form>
      {
        numbers.map(function(arrayElement, index){
          // console.log(`${Math.random()}-${index}`);
          return <div key={`${Math.random()}-${index}`}>{arrayElement}</div>
        })
      }
      {
        isShow && <div>Text showed</div>
      }
    </div>
  )
}
export default App;
