import React, { Component } from "react";

//React Life cycle
class MountingP extends Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
    console.log("Constructor");
  }
  //object literals
  handleCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  //callback wala
  handleDecrease = () => {
    this.setState((prevState) => {
      count: prevState + this.state.count;
    });
  };
  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <p>Going Boss</p>
        <button onClick={this.handleCount}>Like</button>
        <button onClick={this.handleDecrease}>Dislike</button>
      </div>
    );
  }
}
export default MountingP;
