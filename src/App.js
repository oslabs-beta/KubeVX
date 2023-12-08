import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { UserProvider } from './UserContext.js';
import { Provider } from 'react-redux'; // Import Provider from react-redux
import store from './store.js'; // Import your Redux store
import MainDashboard from './MainDashboard.js';
import LearnK8s from './LearnK8s.js';
import ClusterView from './ClusterView.js';
import Login from './Login.js';
import Register from './Register.js';
import Logout from './Logout.js';
import AddCluster from './AddCluster.js';
import CustomMetricsContainer from './CustomMetricsContainer.js';

const App = () => {
  return (
    <UserProvider>
      <Provider store={store}>
        {/* Wrap your entire application with the Provider */}
        <Router>
          <div>
            <Switch>
              <Route exact path="/" component={Login} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/logout" component={Logout} />
              <Route exact path="/addcluster" component={AddCluster} />
              <Route exact path="/maindashboard" component={MainDashboard} />
              <Route exact path="/learnk8s" component={LearnK8s} />
              <Route exact path="/clusterview" component={ClusterView} />
              <Route exact path="/custom" component={CustomMetricsContainer} />
            </Switch>
          </div>
        </Router>
      </Provider>
    </UserProvider>
  );
};

export default App;
