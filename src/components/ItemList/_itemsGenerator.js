import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
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
  },
  itemsrow: {
    marginBottom: "5px"
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
            <div className={classes.itemsrow}>
              <label className="date-label">{item.start.date}</label>
              <span>{item.start.time} - {item.end.time}({item.time}h)</span>
              <label className="rate-label">{item.rate}zl</label>
            </div>

            <div className={classes.itemsrow}>{item.position}</div>
            <div className={classes.itemsrow}>{item.customer}</div>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Grid item xs={12}>
            <ButtonGroup
              fullWidth
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
