import React from "react";
import "./App.css";
import bgg from "./images/Decide.JPG";

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      counter: 0,
    };
  }

  handleClick = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  render() {
    return <div className="bg">{/* <img src="bgg" /> */}</div>;
  }
}
