import React from "react";
import "./Counter.css";

export class Counter extends React.Component {
  constructor(props) {
    super(props);
     // local state
    this.state = { count: 0, isStarted: false };
    // This binding is necessary to make `this` work in the callback. eg (toggleButton)
    this.toggleButton = this.toggleButton.bind(this);
  }

  toggleButton() {
    if (!this.state.isStarted) {
       // clicked Start button, so start the timer
      this.counterInterval = setInterval(() => {
        // Update the counter state
        this.setState((state) => ({
          count: state.count + 1,
        }));
      }, 1000);
    } else {
       // clicked stopped button, so clear the timer
      clearInterval(this.counterInterval);
    }
    // update the isStarted state
    this.setState({
      isStarted: !this.state.isStarted,
    });
  }

  render() {
    return (
      <div className="counter">
        <button className="btn" onClick={this.toggleButton}>
          {this.state.isStarted ? "Stop" : "Start"}
        </button>

        <span>Count is {this.state.count}</span>
      </div>
    );
  }
}
