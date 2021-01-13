import React from "react";
import { render } from "react-dom";
import { Page } from "./todo-app/Page";

class App extends React.Component {
  render() {
    return <Page></Page>;
  }
}

render(<App />, document.getElementById("app"));
