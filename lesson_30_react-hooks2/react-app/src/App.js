import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect, useContext, createContext } from "react";

const url =
  "https://raw.githubusercontent.com/SerikJSH/js-sapsan-code/master/project_01_eshop/server/catalog.json";

const dataContext = createContext();
const countContext = createContext();

function App() {
  const [data, setData] = useState([]);

  async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    console.log("Data:", data);
    setData(data);
  }

  useEffect(function () {
    setTimeout(() => {
      getData();
    }, 2000);
  }, []);

  useEffect(function () {
    console.log(data.length);
  });

  if (data.length == 0) {
    return <h1>Loading...</h1>;
  }

  return (
    // show = data.map(function(element){

    <div>
      <p>
        {data.map(function (item) {
          return <h2>{item.name}</h2>;
        })}
      </p>
    </div>
  );

  function Component1(props) {
    const item = useContext(dataContext);
    return <Component2 data={props.data} />;
  }
  function Component2() {
    return <Component3 />;
  }
  function Component3() {
    return <Component4 />;
  }
  function Component4() {}
}

export default App;
