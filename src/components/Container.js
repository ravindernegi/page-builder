import React, { Component } from "react";
import { PopupWidget } from "./index";

class Container extends Component {
  constructor() {
    super();
    this.state = { popup: false };
    this.openComponents = this.openComponents.bind(this);
  }

  openComponents() {
    this.setState({ popup: true });
  }
  render() {
    return (
      <React.Fragment>
        {this.state.popup === true && <PopupWidget />}

        <button onclick={this.openComponents}>Add</button>
        <div className="editer-box" />
      </React.Fragment>
    );
  }
}

export default Container;
