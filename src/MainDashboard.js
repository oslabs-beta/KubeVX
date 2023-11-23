import React from 'react';
import Navigation from './components/Navigation.jsx';
import ClusterHealth from './components/ClusterHealth.jsx';
import Prometheus from './components/Prometheus.jsx';
import NodeExporter from './components/NodeExporter.jsx';
import '../src/public/mainDashboard.css';

const MainDashboard = () => {
  return (
    <div className="App">
      <Navigation />
      <div className="content">
        <h1>Main Dashboard</h1>
        <ClusterHealth />
        <Prometheus />
        <NodeExporter />
      </div>
    </div>
  );
};

export default MainDashboard;