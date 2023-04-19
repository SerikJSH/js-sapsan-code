import "./App.css";
import React, { Component, useEffect, useState } from "react";
import axios from "axios";

// const url = "";
// const dataI = fetch(url);
const apiUrl =
  "http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D";

function App() {
  const [data, setData] = useState([]);
  React.useState(function () {
    axios.get(apiUrl).then((response) => {
      console.log("response:", response);
      console.log("response.data:", response.data);
      console.log("data:", data);
      setData(response.data);
    });
  }, data);
  if (data.length == 0) {
    return <div className="App">Waiting for data...</div>;
  } else {
    <div className="App">
      <p>
        {console.log("Data:", data)}
        {data.map(function (item) {
          console.log(item.firstName, item.lastName);
          return item.firstName;
        })}
      </p>
    </div>;
  }
}

function withStyle(component) {
  return function (props) {
    const styles = { backgroundColor: "red" };

    return <Component styles={styles} {...props} />;
  };
}

const Button = () => <button>Click me!!</button>;
const Hello = () => <p>Hello World!</p>;

const StyledButton = withStyle(Button);
const StyledText = withStyle(Hello);

export default App;
