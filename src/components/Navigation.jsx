import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="navigation">
      <h2 className="nav-item">Kube VX</h2>
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
    </div>
  );
};

export default Navigation;