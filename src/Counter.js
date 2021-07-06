import React from "react";
import "./Counter.css";

export class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0, isStarted: false };
    this.toggleButton = this.toggleButton.bind(this);
  }

  toggleButton() {
    if (!this.state.isStarted) {
      this.counterInterval = setInterval(() => {
        this.setState((state, props) => ({
          count: state.count + 1,
        }));
      }, 1000);
    } else {
      clearInterval(this.counterInterval);
    }
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
