import React, { Component } from "react";
import TikrowService from "./../../servises/tikrow-service";
import Header from "./../Header";

import TaskPage from "./../pages/tasks-page";

import "./App.scss";

class App extends Component {
  state = {
    tikrowService: new TikrowService(),
    items: null,
    id: 0
  };
  render() {
    return (
      <div className="AppWrapper">
        <Header />
        <TaskPage />
      </div>
    );
  }
}

export default App;
