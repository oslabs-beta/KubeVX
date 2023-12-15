import React from 'react';

const Deployments = () => {
  return (
    <div className="section-container">
      <h4>Deployments</h4>
      <div className="iframe-row">
        <iframe
          title="Grafana Dashboard 1"
          src="http://localhost:3000/d-solo/4XuMd2Iiz/kubernetes-cluster-prometheus?orgId=1&from=1702601889172&to=1702603689172&panelId=16"
          width="400"
          height="200"
        ></iframe>

        <iframe
          title="Grafana Dashboard 2"
          src="http://localhost:3000/d-solo/4XuMd2Iiz/kubernetes-cluster-prometheus?orgId=1&from=1702601924500&to=1702603724500&panelId=18"
          width="400"
          height="200"
        ></iframe>

        <iframe
          title="Grafana Dashboard 3"
          src="http://localhost:3000/d-solo/4XuMd2Iiz/kubernetes-cluster-prometheus?orgId=1&from=1702601955464&to=1702603755464&panelId=20"
          width="400"
          height="200"
        ></iframe>
      </div>
    </div>
  );
};

export default Deployments;
