import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainDashboard from "./MainDashboard.js";
import LearnK8s from "./LearnK8s.js";
import ClusterView from "./ClusterView.js";
import DBoardCreate from "./components/DBoardCreate.jsx"

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={MainDashboard} />
          <Route exact path="/learnk8s" component={LearnK8s} />
          <Route exact path="/clusterview" component={ClusterView} />
          <Route exact path="/register" component={DBoardCreate} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
