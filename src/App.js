import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      display: "",
      result: ""
    };
  }

  handleClick = (value) => {
    if (value === "=" && this.state.display) {
      try {
        const result = eval(this.state.display);
        this.setState({ result });
      } catch (error) {
        this.setState({ result: "Error" });
      }
    } else if (value === "C") {
      this.setState({ display: "", result: "" });
    } else {
      this.setState({ display: this.state.display + value });
    }
  };

  render() {
    return (
      <div className="calculator">
        <div className="display">{this.state.display}</div>
        <div className="result">{this.state.result}</div>
        <div className="buttons">
          <button onClick={() => this.handleClick("7")}>7</button>
          <button onClick={() => this.handleClick("8")}>8</button>
          <button onClick={() => this.handleClick("9")}>9</button>
          <button onClick={() => this.handleClick("+")}>+</button>
          <button onClick={() => this.handleClick("4")}>4</button>
          <button onClick={() => this.handleClick("5")}>5</button>
          <button onClick={() => this.handleClick("6")}>6</button>
          <button onClick={() => this.handleClick("-")}>-</button>
          <button onClick={() => this.handleClick("1")}>1</button>
          <button onClick={() => this.handleClick("2")}>2</button>
          <button onClick={() => this.handleClick("3")}>3</button>
          <button onClick={() => this.handleClick("*")}>*</button>
          <button onClick={() => this.handleClick("0")}>0</button>
          <button onClick={() => this.handleClick(".")}>.</button>
          <button onClick={() => this.handleClick("=")}>=</button>
          <button onClick={() => this.handleClick("/")}>/</button>
          <button onClick={() => this.handleClick("C")}>C</button>
        </div>
      </div>
    );
  }
}

export default App;
