import React, { Component } from "react";
import PropTypes from "prop-types";
import TikrowService from "./../../servises/tikrow-service";
import TestTikrowService from "./../../servises/test-data-service";
import ItemList from "./../ItemList";
import Header from "./../Header";
import TabPanel from "./../TabPanel";
import PaperBox from "./../PaperBox";
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
        <TabPanel />
        <ItemList getData={this.state.tikrowService} />
      </div>
    );
  }
}

export default App;
