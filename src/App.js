import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { UserProvider } from "./UserContext.js";
import MainDashboard from "./MainDashboard.js";
import LearnK8s from "./LearnK8s.js";
import ClusterView from "./ClusterView.js";
import Login from "./Login.js"; 
import Register from "./Register.js";
import AddCluster from "./AddCluster.js"
import DBoardCreate from "./DBoardCreate.js"

const App = () => {
  return (
    <UserProvider> 
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={AddCluster} />
          <Route exact path="/maindashboard" component={MainDashboard} />
          <Route exact path="/learnk8s" component={LearnK8s} />
          <Route exact path="/clusterview" component={ClusterView} />
          {/* <Route exact path="/dashboard" component={DBoardCreate} /> */}
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/logout" component={Logout} />
        </Switch>
      </div>
    </Router>
    </UserProvider>
  );
};

export default App;
