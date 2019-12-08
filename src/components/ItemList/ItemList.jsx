import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import ItemsGenerator from "./_itemsGenerator";
import withDataList from "./../HOC/with-data-list";

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

const ItemList = props => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm">
      <div
        className={`${classes.root} item-list ${
          props.openDetails ? "close" : "open"
        }`}
      >
        <ItemsGenerator data={props.data} onItemClick={props.onItemClick} />
      </div>
    </Container>
  );
};

export default withDataList(ItemList);
