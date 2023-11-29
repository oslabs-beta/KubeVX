import React from 'react';

const Prometheus = () => {
  //Just have the user change the UID to kubeVX for this to work
  return (
    <div className="section-container">
      <h4>Pod</h4>
      <div className="iframe-row">
        <iframe
          title="Grafana Dashboard 1"
          src="http://localhost:3000/d-solo/os6Bh8Omk/kubernetes-cluster?orgId=1&from=1701236854560&to=1701237279113&panelId=5"
          // width="400"
          // height="200"
        ></iframe>

        <iframe
          title="Grafana Dashboard 2"
          src="http://localhost:3000/d-solo/os6Bh8Omk/kubernetes-cluster-prometheus?orgId=1&refresh=5s&from=1701215662883&to=now&panelId=14"
          // width="400"
          // height="200"
        ></iframe>

        <iframe
          title="Grafana Dashboard 3"
          src="http://localhost:3000/d-solo/rYdddlPWk/node-exporter-full?orgId=1&from=1701152616604&to=1701239016604&panelId=74"
          // width="400"
          // height="200"
        ></iframe>
      </div>
    </div>
  );
};

export default Prometheus;
