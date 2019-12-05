import React, { Component } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Spiner from "../UI/spiner";
import ErrorIndicator from "../UI/errorIndicator";
import ItemGeneraitor from "./_itemsGenerator";

import "./ItemList.scss";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

export default class ItemList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      loading: true,
      hasError: false
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.getData !== prevProps.getData) {
      this.update();
    }
  }
  componentDidMount() {
    this.update();
  }

  update() {
    const { getData } = this.props;
    getData
      .getFetchAll()
      .then(data => {
        this.setState({
          data,
          loading: false
        });
      })
      .catch(() => {
        this.setState({ hasError: true });
      });
  }

  componentDidCatch() {
    this.setState({
      isError: true
    });
  }
  classes = () => useStyles();

  render() {
    const { data, hasError } = this.state;
    if (!data) {
      return <Spiner />;
    }
    if (hasError) {
      return <ErrorIndicator />;
    }
    return (
      <Container maxWidth="sm">
        <div
          className={`${this.classes.root} item-list ${
            this.props.openDetails ? "close": "open" 
          }`}
        >
          <ItemGeneraitor data={data} onItemClick={this.props.onItemClick} />
        </div>
      </Container>
    );
  }
}
