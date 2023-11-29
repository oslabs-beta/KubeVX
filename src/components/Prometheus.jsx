import React from 'react';

const Prometheus = () => {
  //Just have the user change the UID to kubeVX for this to work
  return (
    <div className="section-container">
      <h4>Pod</h4>
      <div className="iframe-row">
          <iframe
            title="Grafana Dashboard 1"
            src="http://localhost:3000/d-solo/kubeVX/prometheus-2-0-overview?orgId=1&refresh=5s&from=1700697048242&to=now&panelId=14"
            width="400"
            height="200"
          ></iframe>

          <iframe
            title="Grafana Dashboard 2"
            src="http://localhost:3000/d-solo/kubeVX/prometheus-2-0-overview?orgId=1&refresh=5s&from=1700697082354&to=now&panelId=5"
            width="400"
            height="200"
          ></iframe>

          <iframe
            title="Grafana Dashboard 3"
            src="http://localhost:3000/d-solo/kubeVX/prometheus-2-0-overview?orgId=1&refresh=5s&from=1700705495198&to=now&panelId=24"
            width="400"
            height="200"
          ></iframe>

      </div>
    </div>
  );
};

export default Prometheus;