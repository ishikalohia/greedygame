import React from "react";
import applist from "../../../../assets/applist.json";
import Avatar from "@material-ui/core/Avatar";
import CardHeader from "@material-ui/core/CardHeader";
import arrow from "../../../../assets/arrow.png";
import appdata from "../../../../assets/sample-all-app-stats.json";
import "./adinfo.css";

var index = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
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
var path = [
  "/whatsapp",
  "/facebook",
  "/google",
  "/candycrush",
  "/clash",
  "/callofduty",
  "/ballpoll",
  "/subway",
  "/clashroyale",
  "/asphalt",
];

var Revenue = [];
var req = [];
var res = [];
var imp = [];

for (let j = 1; j < 11; j++) {
  let s1 = 0,
    s2 = 0,
    s3 = 0,
    s4 = 0;
  for (let k = 0; k < 7; k++) {
    s1 += appdata[parseInt(j)][parseInt(k)].revenue;
    s2 += appdata[parseInt(j)][parseInt(k)].adRequest;
    s3 += appdata[parseInt(j)][parseInt(k)].adResponse;
    s4 += appdata[parseInt(j)][parseInt(k)].impressions;
  }
  Revenue.push((s1 / 7).toFixed(0));
  req.push((s2 / 7).toFixed(0));
  res.push((s3 / 7).toFixed(0));
  imp.push((s4 / 7).toFixed(0));
}

function adinfo() {
  return (
    <div className="scroll " style={{ backgroundColor: "#f7f7f7" }}>
      {index.map((i) => (
        <div className="card">
          <CardHeader
            avatar={
              <Avatar
                variant="square"
                style={{
                  backgroundColor: color[i],
                  display: "inline-flex",
                  width: "60px",
                  height: "60px",
                  borderRadius: "6%",
                }}
              >
                {" "}
              </Avatar>
            }
            action={
              <a href={path[i]}>
                <img src={arrow} className="arrow" alt="Arrow" />
              </a>
            }
            title={applist[i].appName}
            subheader={applist[i].publisherName}
          />

          <table className="itable">
            <tr className="thead">
              <td>Revenue</td>
              <td>Ad Request</td>
              <td>Ad Response</td>
              <td>Impressions</td>
            </tr>
            <tr className="details">
              <td>${Revenue[i]}</td>
              <td>{Math.floor(req[i] / 1000000)}M</td>
              <td>{Math.floor(res[i] / 1000000)}M</td>
              <td>{Math.floor(imp[i] / 1000)}K</td>
            </tr>
          </table>
        </div>
      ))}
    </div>
  );
}

export default adinfo;
