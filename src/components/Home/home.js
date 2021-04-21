import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import main from "../../assets/asset1.svg";
import Section from "./Section/section";
import Appstat from "./Appstats/appstat";
import "./home.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function CenteredGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} lg={6} className="grid">
          <div className="first">
            <div className="head"> A D S O U L</div>
            <center>
              <img src={main} className="main" alt="main" />
            </center>
          </div>
          <Section />
        </Grid>
        <Grid item xs={12} lg={6}>
          <Appstat />
        </Grid>
      </Grid>
    </div>
  );
}
