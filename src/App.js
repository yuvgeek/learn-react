import React from "react";
import "./App.css";
import { Counter } from "./Counter";

function App(props) {
  return (
    <div className="container">
      <h1>Understanding State</h1>
      <Counter></Counter>
      <Counter></Counter>
    </div>
  );
}

export default App;
