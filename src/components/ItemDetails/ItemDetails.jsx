import React, { Component } from "react";
import PropTypes from "prop-types";
import Spiner from "./../UI/spiner";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import "./itemDetails.scss";
import DetailRow from "./_detailsRow";
import infoDataDetails from "./_infoDataDetails.js";
import Button from "@material-ui/core/Button";
import ItemHeader from "./_itemHeader";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  }
}));

class ItemDetails extends Component {
  state = {
    data: null,
    hasError: false,
    loading: true
  };
  classes = () => useStyles();
  componentDidUpdate(prevProps) {
    if (
      this.props.getData !== prevProps.getData ||
      this.props.id !== prevProps.id
    ) {
      this.update();
    }
  }
  componentDidMount() {
    this.update();
  }
  update() {
    const { getData } = this.props;
    getData
      .getFetchItemDetails(this.props.id)
      .then(data => {
        this.setState({
          data,
          loading: false
        });
        console.log("Data img", data);
      })
      .catch(() => {
        this.setState({ hasError: true });
      });
  }
  onBackToListHandler = () => {
    console.log("back to list was clicked");
  };
  render() {
    const { data } = this.state;
    if (!data) {
      return <Spiner />;
    }
    const itemrows = infoDataDetails(data).map((item, i) => {
      return <DetailRow key={i} data={item} />;
    });

    return (
      <div className={`item-details-wrap ${this.props.openDetails? "open" : "close"}`}>
        <ItemHeader
          onclick={this.props.onItemDetailsClose}
          status={this.state.data.availability}
        />
        <Container maxWidth="sm">
          <Grid container spacing={0} justify="space-between">
            <Grid item xs={12}>
              <div className="img-wrap">
                <img src={this.state.data.img} />
              </div>
            </Grid>
            {itemrows}
          </Grid>
        </Container>
        <div className="item-header-wrap">
          <Container maxWidth="sm">
            <ButtonGroup
              fullWidth={true}
              alignItems="center"
              size="large"
              aria-label="full width contained primary button group"
            >
              <Button data-colors="btn-mint">AKCEPTUJ</Button>
            </ButtonGroup>
          </Container>
        </div>
      </div>
    );
  }
}

export default ItemDetails;
