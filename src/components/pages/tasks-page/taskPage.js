import React, { Component } from "react";
import ItemList from "./../../ItemList";
import ItemDetails from "./../../ItemDetails";
import TikrowService from "./../../../servises/tikrow-service";
import TabPanel from "./../../TabPanel";

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
    console.log("item id", id);
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
        <TabPanel onFilterChange={this.onFilterChange} />
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
        )}
      </div>
    );
  }
}
