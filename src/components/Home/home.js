import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import main from "../../assets/asset1.svg";
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
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} className="first">
          <div className="head"> A D S O U L</div>
          <center>
            <img src={main} className="main" alt="main" />
          </center>
        </Grid>
        <Grid item xs={12} sm={6}>
          xs=12 sm=6
        </Grid>
      </Grid>
    </div>
  );
}
