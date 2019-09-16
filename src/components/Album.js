import React from "react";
import {Link } from "react-router-dom";

import Footer from "./Footer";
import AppBar from "@material-ui/core/AppBar";
import Button from "@material-ui/core/Button";
import CameraIcon from "@material-ui/icons/PhotoCamera";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

// import Link from '@material-ui/core/Link';
import Lists from "./Lists";

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heading : {
    textTransform: "uppercase",
    fontWeight: "700",
    color:"lightGray"
  },
  title: {
    flexGrow: 1,
    textDecoration: "none"
  },
  appbar:{
    backgroundColor: "lightBlue"
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));

function signOut() {
  let userLocal = JSON.parse(localStorage.getItem("userSignIn"));
  userLocal.isSignIn = false;
  localStorage.setItem("userSignIn", JSON.stringify(userLocal));
  userLocal = JSON.parse(localStorage.getItem("userSignIn"));
}

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar className={classes.appbar} position="relative">
        <Toolbar>
          <CameraIcon className={classes.icon} />

          <Typography
            component={Link}
            to="/"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            Home
          </Typography>
          <Button
            component={Link}
            to="/"
            size="large"
            color="inherit"
            onClick={signOut}
          >
            Sign Out
          </Button>
          <Button
            component={Link}
            size="large"
            color="inherit"
          >
            Add data
          </Button>
        </Toolbar>
      </AppBar>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
              className= {classes.heading}
            >
              Contact List
            </Typography>
          </Container>
        </div>
        <Lists />
      </main>
      <Footer/>
    </React.Fragment>
  );
}
