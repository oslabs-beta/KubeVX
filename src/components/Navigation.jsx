import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext';

const Navigation = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="navigation">
      <h2 className="nav-top-item">Kube VX</h2>
      {/* {user && <div className="nav-greetings">Hi {user.username}!</div>} */}
      {user && user.username ? (
        <div className="nav-greetings">Hi {user.username}!</div>
      ) : (
        <div className="nav-greetings">Hello!</div>
      )}

      <Link to="/addcluster" className="nav-item">
        Add Cluster
      </Link>
      <Link to="/maindashboard" className="nav-item">
        Dashboard
      </Link>
      <Link to="/custom" className="nav-item">
        Custom Metrics
      </Link>
      <Link to="/clusterview" className="nav-item">
        Cluster View
      </Link>
      <Link to="/logs" className="nav-item">
        Logs
      </Link>
      <Link to="/alerts" className="nav-item">
        Alerts
      </Link>
      <Link to="/learnk8s" className="nav-item">
        Learn Kubernetes
      </Link>

      <div className="nav-bottom">
        {/* {user ? (
          <Link to="/logout" className="nav-item">
            Logout
          </Link>
        ) : (
          <Link to="/" className="nav-item">
            Login
          </Link>
        )} */}
        <Link to="/logout" className="nav-item">
          Logout
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
