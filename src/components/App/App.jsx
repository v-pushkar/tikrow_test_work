import React, { Component } from "react";
import PropTypes from "prop-types";
import TikrowService from "./../../servises/tikrow-service";
import TestTikrowService from "./../../servises/test-data-service";
import ItemList from "./../ItemList";
import Header from "./../Header";
import TabPanel from "./../TabPanel";
import ItemDetails from "./../ItemDetails";
import { TikrowServiceProvider } from "./../tikrow-servise-context";

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
          <TabPanel />
          {/* <ItemList getData={this.state.tikrowService} /> */}
          <ItemDetails getData={this.state.tikrowService} />
        </TikrowServiceProvider>
      </div>
    );
  }
}

export default App;
