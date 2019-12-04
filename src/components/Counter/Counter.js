import React from "react";
import Typography from "@material-ui/core/Typography";

const Counter = props => {
  return (
    <Typography variant="h5">
    <div className="counter">
      <span>{props.numOne}</span>
      <span>/</span>
      <span>{props.numTwo}</span>
    </div>
    </Typography>
  );
};

export default Counter;
