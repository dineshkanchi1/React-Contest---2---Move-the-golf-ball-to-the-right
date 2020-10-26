import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderBall: false, //variable needed to be changed
      posi: 0,
      ballPosition: { left: "0px" }
    };
    this.renderChoice = this.renderChoice.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
  }

  //call back function
  handler() {
    window.addEventListener("keydown", (e) => {
      if (e.key === "ArrowRight") {
        this.setState({
          posi: this.state.posi + 5
        });
        this.setState({
          ballPosition: { left: this.state.posi + "px" }
        });
      }
    });
  }
  buttonClickHandler() {
    this.setState({ renderBall: true });
  }
  renderChoice() {
    if (this.state.renderBall) {
      return <div className="ball" style={this.state.ballPosition}></div>;
    } else {
      return (
        <button onClick={this.buttonClickHandler}>Click For One Ball</button>
      );
    }
  }

  //bind ArrowRight keydown event
  componentDidMount() {
    this.handler();
  }

  render() {
    return <div className="playground">{this.renderChoice()}</div>;
  }
}

export default App;
