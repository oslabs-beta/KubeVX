import React from 'react';
import Navigation from './components/Navigation.jsx';
import ClusterHealth from './components/ClusterHealth.jsx';
import Prometheus from './components/Prometheus.jsx';
import NodeExporter from './components/NodeExporter.jsx';
import Deployments from './components/Deployments.jsx';
import '../src/public/mainDashboard.css';

const MainDashboard = () => {
  return (
    <div className="mainDashboardContainer">
      <Navigation />
      <div className="content">
      <h1 className="dashboard-title">Dashboard</h1>
        <ClusterHealth />
        <NodeExporter />
        <Prometheus />
        <Deployments />
      </div>
    </div>
  );
};

export default MainDashboard;
