import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext';

const Navigation = () => {
  const { user } = useContext(UserContext);


  return (
    <div className="navigation">
      <h2 className="nav-item">Kube VX</h2>
      {user && <div className="user-greeting">Hi {user.username}!</div>}
      <Link to="/" className="nav-item second-color">
        Main Dashboard
      </Link>
      <Link to="/learnk8s" className="nav-item first-color">
        Learn Kubernetes
      </Link>
      <Link to="/clusterview" className="nav-item third-color">
        Cluster View
      </Link>
      <Link to="/login" className="nav-item third-color">
        Login
      </Link>
      <Link to="/logout" className="nav-item third-color">
        Logout
      </Link>
    </div>
  );
};

export default Navigation;