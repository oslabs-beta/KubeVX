import React from 'react';
import Navigation from './components/Navigation.jsx';
// import '../src/public/clusterView.css';

const ClusterView = () => {
  return (
    <div className="mainDashboardContainer">
      <Navigation />
      <div className="content">
        <h1>Cluster</h1>
      </div>
    </div>
  );
};

export default ClusterView;
