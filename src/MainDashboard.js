import React from 'react';
import Navigation from './components/Navigation.jsx';
import '../src/public/mainDashboard.css';

const MainDashboard = () => {
  return (
    <div className="App">
      <Navigation />
      <div className="content">
        <h1>Main Dashboard</h1>
        <div style={{ maxWidth: '800px', margin: 'auto' }}>
          <iframe
            title="Grafana Dashboard 1"
            src="http://localhost:3000/d-solo/rYdddlPWk/node-exporter-full?orgId=1&from=1700366669484&to=1700453069485&panelId=16"
            width="450"
            height="200"
          ></iframe>

          <iframe
            title="Grafana Dashboard 2"
            src="http://localhost:3000/d-solo/rYdddlPWk/node-exporter-full?orgId=1&from=1700366619670&to=1700453019670&panelId=78"
            width="450"
            height="200"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
