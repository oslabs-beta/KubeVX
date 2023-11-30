import React from 'react';

const DaemonSet = () => {
  return (
    <div className="section-container">
      <h4>DaemonSet</h4>
      <div className="iframe-row">
        <iframe
          title="Grafana Dashboard 1"
          src="http://localhost:3000/d-solo/oWe9aYxmk/f017fd7b-1f88-5a64-b2dc-772cca6f4c90?orgId=1&refresh=30s&from=1701229024104&to=1701239824104&panelId=2"
          width="400"
          height="200"
        ></iframe>

        <iframe
          title="Grafana Dashboard 2"
          src="http://localhost:3000/d-solo/oWe9aYxmk/f017fd7b-1f88-5a64-b2dc-772cca6f4c90?orgId=1&refresh=30s&from=1701228770292&to=1701239570293&panelId=9"
          width="400"
          height="200"
        ></iframe>

        <iframe
          title="Grafana Dashboard 3"
          src="http://localhost:3000/d-solo/oWe9aYxmk/f017fd7b-1f88-5a64-b2dc-772cca6f4c90?orgId=1&refresh=30s&from=1701228809313&to=1701239609313&panelId=11"
          width="400"
          height="200"
        ></iframe>
      </div>
    </div>
  );
};

export default DaemonSet;
