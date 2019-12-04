import React, { Component } from "react";
import PropTypes from "prop-types";
import withData from "../hoc/with-data";
import Spiner from "./../UI/spiner";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import "./itemDetails.scss";
import DetailRow from "./_detailsRow";

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
      .getFetchItemDetails(11507)
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
  render() {
    const { data } = this.state;
    if (!data) {
      return <Spiner />;
    }
    const {
      id,
      img,
      position,
      start,
      time,
      rate,
      rateHouer,
      adress,
      requirements,
      description
    } = data;
    return (
      <div className="item-details-wrap">
        <Container size="lg">
          <Grid container spacing={0} justify="space-around" direction="column">
            <Grid item xs={12}>
              <div className="img-wrap">
                {/* <img src={img} /> */}
              </div>
            </Grid>
            <DetailRow data={{ size: 12, label: "Stanowisko", text: position }} />      
           {/* DATE TIME */}
            <DetailRow
              data={[
                { size: 6, label: "Data", text: start },
                { size: 6, label: "Czas", text: time }
              ]}
            />
            <DetailRow data={[{size:8, label:"Mejsce realizacji", text: `${adress.name }`},{}]}></DetailRow>
          </Grid>
        </Container>
      </div>
    );
  }
}

export default ItemDetails;
