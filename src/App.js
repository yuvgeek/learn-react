import React from "react";
import "./App.css";
import SearchResult from "./SearchResult";

// Functional Component
// function App(props) {
//   return <h1>Learn React</h1>;
// }

// Class Component
// class App extends React.Component {
//   render() {
//     return <h1>Learn React</h1>;
//   }
// }

function App(props) {
  const data = [
    {
      url: "google.com",
      title: "Technology definition and meaning",
      description:
        "Technology refers to methods, systems, and devices which are the result of scientific knowledge being used",
    },
    {
      url: "reactjs.com",
      title: "React JS is a front end technology",
      description:
        "Technology refers to methods, systems, and devices which are the result of scientific knowledge being used",
    },
  ];
  return (
    <div className="container">
      {/* // enter search query */}
      <input type="text"></input>
      <div className="search-results">
        {data.map((item) => {
          return (
            <SearchResult
              title={item.title}
              url={item.url}
              description={item.description}
            ></SearchResult>
          );
        })}
      </div>
    </div>
  );
}

export default App;
