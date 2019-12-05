import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
// import "./itemDetails.scss";

const DetailsRow = props => {
  const { data } = props;
  if (data.length > 1) {
    const row = data.map(i => (
      <div className="inline-block">
        <Typography variant="body2" gutterBottom>
          {i.label}
        </Typography>

        <div>{i.text}</div>
      </div>
    ));
    return <div className="item-detail-row-2">{row}</div>;
  }

  return (
    <Grid container spacing={5}>
      <Grid item xs={data.size}>
        <div className="item-detail-row-1">
          <Typography variant="body2" gutterBottom>
            {data.label}
          </Typography>
          <div>{data.text}</div>
        </div>
      </Grid>
    </Grid>
  );
};

export default DetailsRow;
