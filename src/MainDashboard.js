import React from 'react';
import Navigation from './components/Navigation.jsx';
import ClusterHealth from './components/ClusterHealth.jsx';
import Prometheus from './components/Prometheus.jsx';
import NodeExporter from './components/NodeExporter.jsx';
import DaemonSet from './components/Daemonset.jsx';
import '../src/public/mainDashboard.css';

const MainDashboard = () => {
  return (
    <div className="mainDashboardContainer">
      <Navigation />
      <div className="content">
        <h1>Main Dashboard</h1>
        <ClusterHealth />
        <NodeExporter />
        <Prometheus />
        <DaemonSet/>
      </div>
    </div>
  );
};

export default MainDashboard;
