import React from 'react';

const ClusterHealth = () => {
  return (
    <div className="section-container">
      <h4>Cluster</h4>
      <div className="iframe-row">
        <iframe
            title="Grafana Dashboard 1"
            src="http://localhost:3000/d-solo/os6Bh8Omk/kubernetes-cluster-prometheus?orgId=1&from=1700696606433&to=now&panelId=5"
            width="400"
            height="200"
        ></iframe>

        <iframe
            title="Grafana Dashboard 2"
            src="http://localhost:3000/d-solo/os6Bh8Omk/kubernetes-cluster-prometheus?orgId=1&from=1700696674389&to=now&panelId=6"
            width="400"
            height="200"
        ></iframe>

        <iframe
            title="Grafana Dashboard 3"
            src="http://localhost:3000/d-solo/os6Bh8Omk/kubernetes-cluster-prometheus?orgId=1&from=1700705850798&to=now&panelId=7"
            width="400"
            height="200"
        ></iframe>
          
      </div>
    </div>
  );
};

export default ClusterHealth;
