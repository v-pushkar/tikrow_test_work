import React, { Component, Fragment } from "react";
import TikrowService from "./../../../servises/tikrow-service";
import TabPanel from "./../../TabPanel";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import {
  ItemDetailstWithData,
  ItemListWithData
} from "../../tikrow-components";

export default class taskPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      openDetails: false,
      activeIdemId: null,
      tikrowService: new TikrowService(),
      items: null,
      filter: "actual"
    };
  }

  onItemSelect = event => {
    const id =
      event.target.nodeName === "SPAN"
        ? event.target.parentElement.value
        : event.target.value;
    this.setState({
      activeIdemId: id,
      openDetails: true
    });
  };
  onItemDetailsClose = () => {
    this.setState({
      activeIdemId: null,
      openDetails: false
    });
  };
  onFilterChange = value => {
    console.log("filterChanged", value);
    let filter = this.state.filter;
    switch (value) {
      case 0:
        filter = "actual";
        break;
      case 1:
        filter = "plane";
        break;
      case 2:
        filter = "finished";
        break;
      default:
        filter = "actual";
    }
    this.setState({
      filter
    });
  };

  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route
              path="/list"
              render={() => (
                <Fragment>
                  <TabPanel onFilterChange={this.onFilterChange} />
                  <ItemListWithData
                    openDetails={this.state.openDetails}
                    getData={this.state.tikrowService}
                    onItemClick={this.onItemSelect}
                  />
                </Fragment>
              )}
            />
            <Route
              path="/detiles/:id?"
              render={({ match }) => {
                return (
                  <ItemDetailstWithData
                    openDetails={this.state.openDetails}
                    onItemDetailsClose={this.onItemDetailsClose}
                    getData={this.state.tikrowService}
                    id={match.params.id}
                  />
                );
              }}
            />
            <Route
              path="/"
              render={() => (
                <div className="MuiButtonBase-root">
                  <Link to="/list">Go to items list</Link>
                </div>
              )}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}
