import React from "react";
import "./App.css";
import Home from "./Home";
import Navigation from "./components/navigation.js";
//className="container container-sm container-md container-lg container-xl"

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  render() {
    return (
      <div>
        <Navigation></Navigation>
        <div style={{ height: "1000px" }}>
          <Home></Home>
        </div>
      </div>
    );
  }
}
