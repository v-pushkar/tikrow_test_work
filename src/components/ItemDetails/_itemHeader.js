import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import { Link } from "react-router-dom";

const ItemHeader = props => {
  return (
    <div className="item-header-wrap">
      <Container maxWidth="sm">
        <div className="item-header">
          <div className="beack-link">
            <Link to="/list">
              <ArrowBackIcon />
            </Link>
          </div>
          <div>
            <Typography variant="h6" gutterBottom>
              Zadanie
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              {props.status}
            </Typography>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ItemHeader;
