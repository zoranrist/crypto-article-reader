import React from "react";
import SearchBar from "./SearchBar";
import Title from "./Title";
import Button from "./Button.js";
import POPOSList from "./POPOSList";

function App() {
  return (
    <div className="App">
      <POPOSList />
      <div
        className="ui container"
        style={{ marginTop: "10px", backgroundColor: "white" }}
      >
        <SearchBar />
        <div className="Button" style={{ backgroundColor: "white" }}>
          <Button />
        </div>
      </div>
    </div>
  );
  function App() {
    return (
      <div className="App">
        <Title />
        <POPOSList />
      </div>
    );
  }
  //   class SearchBar extends React.Component {
  //     render() {
  //       return (
  //         <div
  //           className="ui container"
  //           style={{ marginTop: "10px", backgroundColor: "white" }}
  //         >
  //           <SearchBar />
  //         </div>
}

export default App;
