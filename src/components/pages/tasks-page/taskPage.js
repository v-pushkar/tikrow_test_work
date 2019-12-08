import React, { Component, Fragment } from "react";
import ItemList from "./../../ItemList";
import ItemDetails from "./../../ItemDetails";
import TikrowService from "./../../../servises/tikrow-service";
import TabPanel from "./../../TabPanel";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";

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
          {/* <TabPanel onFilterChange={this.onFilterChange} />
        {!this.state.openDetails && (
          <ItemList
            openDetails={this.state.openDetails}
            getData={this.state.tikrowService}
            onItemClick={this.onItemSelect}
          />
        )}
        {this.state.openDetails && (
          <ItemDetails
            openDetails={this.state.openDetails}
            onItemDetailsClose={this.onItemDetailsClose}
            getData={this.state.tikrowService}
            id={this.state.activeIdemId}
          />
        )} */}
          <Switch>
            <Route
              path="/list"
              render={() => (
                <Fragment>
                  <TabPanel onFilterChange={this.onFilterChange} />
                  <ItemList
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
                console.log("match", match.params.id);
                return (
                  <ItemDetails
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
