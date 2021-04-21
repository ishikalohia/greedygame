import React from "react";
import applist from "../../../../assets/applist.json";
import Avatar from "@material-ui/core/Avatar";
import CardHeader from "@material-ui/core/CardHeader";
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
            title={applist[i].appName}
            subheader={applist[i].publisherName}
          />
          <table>
            <tr>
              <td>Revenue</td>
              <td>Ad Request</td>
              <td>Ad Response</td>
              <td>Impressions</td>
            </tr>
            <tr className="details">
              <td>$350</td>
              <td>34M</td>
              <td>10M</td>
              <td>100M</td>
            </tr>
          </table>
        </div>
      ))}
    </div>
  );
}

export default adinfo;
