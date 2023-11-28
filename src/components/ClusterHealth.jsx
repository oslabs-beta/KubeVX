import React from 'react';

const ClusterHealth = () => {
  return (
    <div className="section-container">
      <h4>Cluster</h4>
      <div className="iframe-row">
        <iframe
            title="Grafana Dashboard 1"
            src="http://localhost:3000/d-solo/4XuMd2Iiz/kubernetes-cluster-prometheus?orgId=1&from=1700696606433&to=1700698406434&panelId=5"
            width="400"
            height="200"
        ></iframe>

        <iframe
            title="Grafana Dashboard 2"
            src="http://localhost:3000/d-solo/4XuMd2Iiz/kubernetes-cluster-prometheus?orgId=1&from=1700696674389&to=1700698474389&panelId=6"
            width="400"
            height="200"
        ></iframe>

        <iframe
            title="Grafana Dashboard 3"
            src="http://localhost:3000/d-solo/4XuMd2Iiz/kubernetes-cluster-prometheus?orgId=1&from=1700705850798&to=1700707650799&panelId=7"
            width="400"
            height="200"
        ></iframe>
          
      </div>
    </div>
  );
};

export default ClusterHealth;
