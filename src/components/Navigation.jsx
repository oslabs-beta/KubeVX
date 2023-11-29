import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext';
  
const Navigation = () => {
const { user } = useContext(UserContext);

  return (
    <div className="navigation">
      <h2 className="nav-item">Kube VX</h2>
    {user && <div className="nav-item third-color">Hi {user.username}!</div>}
      <Link to="/" className="nav-item second-color">
        Add Cluster
      </Link>
      <Link to="/maindashboard" className="nav-item second-color">
        Main Dashboard
      </Link>
      <Link to="/learnk8s" className="nav-item first-color">
        Learn Kubernetes
      </Link>
      <Link to="/clusterview" className="nav-item third-color">
        Cluster View
      </Link>

    <div className="nav-bottom">
      {user ? (
        <Link to="/logout" className="nav-item third-color">Logout</Link>
      ) : (
        <Link to="/login" className="nav-item third-color">Login</Link>
      )}
    </div>
      <Link to="/register" className="nav-item third-color">
        Register
      </Link>
  </div>
);
};

export default Navigation;