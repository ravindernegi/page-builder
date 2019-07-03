import React from "react";
import ReactDOM from "react-dom";
import { Container } from "./components/index";

import "./styles.css";

function App() {
  return (
    <React.Fragment>
      <Container />
    </React.Fragment>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
