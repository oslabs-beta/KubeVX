import React from 'react';

const ClusterHealth = () => {
  return (
    <div className="section-container">
      <h4>Cluster</h4>
      <div className="iframe-row">
        <iframe
          title="Grafana Dashboard 1"
          src="http://localhost:3000/d-solo/rYdddlPWk/node-exporter-full?orgId=1&from=1701152427905&to=1701238827905&panelId=3"
          // width="400"
          // height="200"
        ></iframe>

        <iframe
          title="Grafana Dashboard 2"
          src="http://localhost:3000/d-solo/os6Bh8Omk/kubernetes-cluster-prometheus?orgId=1&refresh=5s&from=1700705850798&to=now&panelId=7"
          // width="400"
          // height="200"
        ></iframe>

        <iframe
          title="Grafana Dashboard 3"
          src="http://localhost:3000/d-solo/os6Bh8Omk/kubernetes-cluster?orgId=1&refresh=30s&from=1701237297082&to=1701239097082&panelId=8"
          // width="400"
          // height="200"
        ></iframe>
      </div>
    </div>
  );
};

export default ClusterHealth;
