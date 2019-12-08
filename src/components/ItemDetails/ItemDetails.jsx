import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import "./itemDetails.scss";
import DetailRow from "./_detailsRow";
import infoDataDetails from "./_infoDataDetails.js";
import Button from "@material-ui/core/Button";
import ItemHeader from "./_itemHeader";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const ItemDetails = props => {
  const itemrows = infoDataDetails(props.data).map((item, i) => {
    return <DetailRow key={i} data={item} />;
  });

  return (
    <div
      className={`item-details-wrap ${props.openDetails ? "open" : "close"}`}
    >
      <ItemHeader
        onclick={props.onItemDetailsClose}
        status={props.data.availability}
      />
      <Container maxWidth="sm">
        <Grid container spacing={0} justify="space-between">
          <Grid item xs={12}>
            <div className="img-wrap">
              <img src={props.data.img} alt="location_foto" />
            </div>
          </Grid>
          {itemrows}
        </Grid>
      </Container>
      <div className="item-header-wrap">
        <Container maxWidth="sm">
          <ButtonGroup
            fullWidth
            size="large"
            aria-label="full width contained primary button group"
          >
            <Button data-colors="btn-mint">AKCEPTUJ</Button>
          </ButtonGroup>
        </Container>
      </div>
    </div>
  );
};

export default ItemDetails;
