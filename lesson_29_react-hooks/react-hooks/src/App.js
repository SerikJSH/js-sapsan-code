import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [isShown, setIsShown] = useState(false);
  let vCount = 0;

  function handleClick() {
    // alert("Clicked!");
    // vCount = vCount + 1;
    setCount(count + 1);
    console.log("Count:", count + 1);
    setIsShown(!isShown);
  }
  // function test() {
  // return {name: "John", setName: function () { return "Peter"; }
  // return [1, 2];
  // };

  // const { name, setName } = test();
  // const [ a, b ] = test();
  // console.log(name);
  // console.log(setName());
  // console.log(a);
  // console.log(b);

  return (
    <div className="App">
      {/* style={{display: 'flex', justifyContent: 'center'}} */}
      {/* <p>Hello!</p> */}

      <div>
        <button onClick={handleClick}>Click me!</button>
        <h1>Count: {count}</h1>
        {
          isShown && <h2>Hello World!</h2> // адаптация оператора if: if (isShown) {<h2>Hello World!</h2>}
        }
      </div>
    </div>
  );
}

export default App;
