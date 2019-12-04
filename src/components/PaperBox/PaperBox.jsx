import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import "./PaperBox.scss";

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    backgroundColor: "#303030",
    color: "#ffffff",
    borderRadius: "0"
  },
  button: {
    color: "#ffffff",
    ttextTransform: "upercase"
  },
  text: {
    fontSize: "14px",
    fontWeight: 200
  }
}));

export default function PaperSheet() {
  const classes = useStyles();

  return (
    <div className="message">
      <Paper className={`${classes.root}`}>
        <Container maxWidth="lg">
          <Typography className={classes.text} align="center">
            Twoj kwestionariusz zostal zweryfikowany.
            <Button
              className={classes.button}
              href="#text-buttons"
              color="text.primary"
            >
              EDYTUJ
            </Button>
          </Typography>
        </Container>
      </Paper>
    </div>
  );
}
