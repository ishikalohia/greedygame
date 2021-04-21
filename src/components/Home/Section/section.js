import React from "react";
import Grid from "@material-ui/core/Grid";
import "./section.css";
import image1 from "../../../assets/icon1.svg";
import image2 from "../../../assets/icon2.svg";
import image3 from "../../../assets/icon3.svg";
import image4 from "../../../assets/icon4.svg";

function section() {
  return (
    <div className="section">
      <Grid container>
        <span className="head1">Revenue Optimization</span>
        <Grid item xs={6}>
          <div className="icon-im">
            <img src={image1} alt="1" />
            <br />
            <span className="caption">Fill Rate</span>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="icon-im">
            <img src={image2} alt="2" />
            <br />
            <span className="caption">Improve CTR</span>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="icon-im">
            <img src={image3} alt="3" />
            <br />
            <span className="caption">Refresh Rate </span>
          </div>
        </Grid>
        <Grid item xs={6}>
          <div className="icon-im">
            <img src={image4} alt="4" />
            <br />
            <span className="caption">Quick Integration</span>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default section;
