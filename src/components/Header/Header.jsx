import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import AccountCircle from "@material-ui/icons/AccountCircle";
import ShareIcon from "@material-ui/icons/Share";
import Counter from "./../Counter";
import Container from "@material-ui/core/Container";
import "./Header.scss";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
   
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  bg:{
    backgroundColor: "#F5F5F5"
  }
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [setAnchorEl] = React.useState(null);
  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div className={`${classes.root} main-naw`}>
      <AppBar position="static" >
        <Container maxWidth="lg">
          <Toolbar>
            <div className="logo-wrapp">
              <img
                src="https://tikrow.com/images/logoTikrow-light.svg"
                alt="logo"
              />
            </div>
            <div>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="primary"
              >
                <Counter numOne={1} numTwo={5} />
              </IconButton>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <ShareIcon fontSize="large" color="primary" />
              </IconButton>
              <IconButton
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle fontSize="large" color="primary" />
              </IconButton>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}
