import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AddCluster from './AddCluster.js';
import MainDashboard from './MainDashboard.js';
import LearnK8s from './LearnK8s.js';
import ClusterView from './ClusterView.js';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={AddCluster} />
          <Route exact path="/maindashboard" component={MainDashboard} />
          <Route exact path="/learnk8s" component={LearnK8s} />
          <Route exact path="/clusterview" component={ClusterView} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
