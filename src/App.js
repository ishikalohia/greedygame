import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import whatsapp from "./components/Pages/whatsapp";
import candycrush from "./components/Pages/candycrush";
import facebook from "./components/Pages/facebook";
import google from "./components/Pages/google";
import clash from "./components/Pages/clashofclans";
import callofduty from "./components/Pages/callofduty";
import ballpoll from "./components/Pages/ballpoll";
import subway from "./components/Pages/subway";
import clashroyale from "./components/Pages/clashrolye";
import asphalt from "./components/Pages/asphalt";
import Home from "./components/Home/home";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Whatsapp" component={whatsapp} />
          <Route path="/facebook" component={facebook} />
          <Route path="/google" component={google} />
          <Route path="/candycrush" component={candycrush} />
          <Route path="/clash" component={clash} />
          <Route path="/callofduty" component={callofduty} />
          <Route path="/ballpoll" component={ballpoll} />
          <Route path="/subway" component={subway} />
          <Route path="/clashroyale" component={clashroyale} />
          <Route path="/asphalt" component={asphalt} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
