import React from "react";

class Clock extends React.Component {
  constructor() {
    super();
    this.state = {
      date: new Date(),
    };
  }

  componentDidMount() {
    // alert('Component');
    this.timeID = setInterval(() => {
      //   console.log(Math.random());
      this.tick();
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timeID);
  }
  tick() {
    this.setState({
      date: new Date(),
    });
  }
  render() {
    return (
      <div style={{ width: "500px", color: "green", justifyContent: "center" }}>
        {/* <h1>Hello, World!</h1> */}
        <h2>Now is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    );
  }
}

export { Clock };
