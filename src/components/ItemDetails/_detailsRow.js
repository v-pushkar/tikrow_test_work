import React from "react";
import Grid from "@material-ui/core/Grid";

const DetailsRow = props => {
  const { data } = props;
  if (data.length > 1) {
    const row = data.map(i => (
      <Grid item xs={i.size}>
        <div>
          <label>{i.label}</label>
        </div>
        <div>{i.text}</div>
      </Grid>
    ));
    return (
      <Grid container spacing={1}>
        {row}
      </Grid>
    );
  }

  return (
    <Grid container spacing={1}>
      <Grid item xs={data.size}>
        <div>
          <label>{data.label}</label>
        </div>
        <div>{data.text}</div>
      </Grid>
    </Grid>
  );
};

export default DetailsRow;
