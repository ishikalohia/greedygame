import React from "react";
import Adinfo from "./adinfo/adinfo";
import "./appstat.css";

function appstat() {
  return (
    <div>
      <h1 className="app-head">Apps</h1>
      <Adinfo />
    </div>
  );
}

export default appstat;
