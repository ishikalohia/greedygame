import React from "react";
import appdata from "../../assets/sample-all-app-stats.json";
import applist from "../../assets/applist.json";
import Avatar from "@material-ui/core/Avatar";
import CardHeader from "@material-ui/core/CardHeader";
import "../Home/Appstats/adinfo/adinfo.css";
import barrow from "../../assets/backarrow.JPG";
import Grid from "@material-ui/core/Grid";

var color = [
  "#f53e15",
  "#1526f5",
  "#11c705",
  "#e622ce",
  "orange",
  "green",
  "Blue",
  "Pink",
  "Red",
  "Yellow",
];
var index = [0, 1, 2, 3, 4, 5, 6];
function whatsapp() {
  return (
    <div>
      <a href="/" style={{ textDecoration: "none" }}>
        <div className="nav">A D S O U L</div>
      </a>
      <Grid container>
        <Grid item xs={1}>
          <a href="/">
            <img src={barrow} className="backarrow" alt="arrow" />
          </a>
        </Grid>
        <Grid item xs={11}>
          <CardHeader
            avatar={
              <Avatar
                variant="square"
                style={{
                  backgroundColor: color[0],
                  display: "inline-flex",
                  width: "60px",
                  height: "60px",
                  borderRadius: "6%",
                }}
              >
                {" "}
              </Avatar>
            }
            title={applist[0].appName}
            subheader={applist[0].publisherName}
          />
        </Grid>
      </Grid>
      <div class="table-responsive">
        <table class="dtab">
          <thead>
            <td className="dhead">Date</td>
            <td className="dhead">Revenue</td>
            <td className="dhead">Ad Requests</td>
            <td className="dhead">Ad Responses</td>
            <td className="dhead">Impressions</td>
            <td className="dhead">Clicks</td>
            <td className="dhead">Render Rate</td>
          </thead>
          {index.map((i) => (
            <tr className="drow">
              <td className="dtable">{appdata[1][i].date}</td>
              <td className="dtable">{appdata[1][i].revenue}</td>
              <td className="dtable">{appdata[1][i].adRequest}</td>
              <td className="dtable">{appdata[1][i].adResponse}</td>
              <td className="dtable">{appdata[1][i].impressions}</td>
              <td className="dtable">{appdata[1][i].clicks}</td>
              <td className="dtable">
                {(
                  (appdata[1][i].impressions / appdata[1][i].adResponse) *
                  100
                ).toFixed(2)}
                %
              </td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default whatsapp;
