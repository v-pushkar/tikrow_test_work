import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    width: "100%",
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}));

const ItemGeneraitor = props => {
  const classes = useStyles();

  const items = props.data.map(item => {
    return (
      <ExpansionPanel key={item.id}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          color="text.primary"
        >
          <div className={classes.heading}>
            <div>
              <label className="date-label">{item.start}</label>
              <span>{item.time}</span>
              <label className="rate-label">{item.rate}zl</label>
            </div>

            <div>{item.position}</div>
            <div>{item.customer}</div>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid item >
            <ButtonGroup
              fullWidth={true}
              alignItems="center"
              size="large"
              aria-label="full width contained primary button group"
            >
              <Button
                data-colors="btn-darkblue"
                value={item.id}
                onClick={props.onItemClick}
              >
                POKAZ
              </Button>
              <Button data-colors="btn-mint">AKCEPTUJ</Button>
            </ButtonGroup>
          </Grid>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    );
  });
  return items;
};

export default ItemGeneraitor;
