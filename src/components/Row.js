import React, { Component } from "react";

class Row extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return <React.Fragment>{this.props.rel}</React.Fragment>;
  }
}

export default Row;
