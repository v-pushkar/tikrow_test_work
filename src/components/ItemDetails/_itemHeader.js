import React from "react";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

const ItemHeader = props => {
  return (
    <div className="item-header-wrap">
      <Container  maxWidth="sm">
        <div className="item-header">
          <div className="beack-link">
            <Button href="#text-buttons" onClick={props.onclick}>
              <ArrowBackIcon />
            </Button>
          </div>
          <div>
          <Typography variant="h5" gutterBottom>
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
