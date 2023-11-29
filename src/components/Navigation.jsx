import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../UserContext';

const Navigation = () => {
  const { user } = useContext(UserContext);
  
return (
  <div className="navigation">
    <h2 className="nav-top-item">Kube VX</h2>
    {user && <div className="nav-greetings">Hi {user.username}!</div>}
    <Link to="/" className="nav-item">Main Dashboard</Link>
    <Link to="/learnk8s" className="nav-item">Learn Kubernetes</Link>
    <Link to="/clusterview" className="nav-item">Cluster View</Link>
    <div className="nav-bottom">
      {user ? (
        <Link to="/logout" className="nav-item">Logout</Link>
      ) : (
        <Link to="/login" className="nav-item">Login</Link>
      )}
    </div>
  </div>
);
};

export default Navigation;