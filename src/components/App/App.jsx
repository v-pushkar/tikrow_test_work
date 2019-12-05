import React, { Component } from "react";
import PropTypes from "prop-types";
import TikrowService from "./../../servises/tikrow-service";
import Header from "./../Header";
import { TikrowServiceProvider } from "./../tikrow-servise-context";
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
        <TikrowServiceProvider value={this.state.tikrowService}>
          <Header />
          <TaskPage />
        </TikrowServiceProvider>
      </div>
    );
  }
}

export default App;
