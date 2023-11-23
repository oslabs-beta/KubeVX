import React from 'react';

const Prometheus = () => {
  return (
    <div className="section-container">
      <h4>Prometheus</h4>
      <div className="iframe-row">
          <iframe
            title="Grafana Dashboard 1"
            src="http://localhost:3000/d-solo/aebc5bef-1265-4b6e-a0be-c8f11500e848/prometheus-2-0-overview?orgId=1&refresh=30s&from=1700697048242&to=1700698848242&panelId=14"
            width="400"
            height="200"
          ></iframe>

          <iframe
            title="Grafana Dashboard 2"
            src="http://localhost:3000/d-solo/aebc5bef-1265-4b6e-a0be-c8f11500e848/prometheus-2-0-overview?orgId=1&refresh=30s&from=1700697082354&to=1700698882355&panelId=5"
            width="400"
            height="200"
          ></iframe>

          <iframe
            title="Grafana Dashboard 3"
            src="http://localhost:3000/d-solo/aebc5bef-1265-4b6e-a0be-c8f11500e848/prometheus-2-0-overview?orgId=1&refresh=30s&from=1700705495198&to=1700707295198&panelId=24"
            width="400"
            height="200"
          ></iframe>

      </div>
    </div>
  );
};

export default Prometheus;