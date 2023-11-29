import React from 'react';

const NodeExporter = () => {
  return (
    <div className="section-container">
      <h4>Node</h4>
      <div className="iframe-row">
             <iframe
            title="Grafana Dashboard 5"
            src="http://localhost:3000/d-solo/rYdddlPWk/node-exporter-full?orgId=1&refresh=5s&from=1700612283859&to=now&panelId=77"
            // width="400"
            // height="200"
          ></iframe>

          <iframe
            title="Grafana Dashboard 6"
            src="http://localhost:3000/d-solo/rYdddlPWk/node-exporter-full?orgId=1&refresh=5s&from=1700612230428&to=now&panelId=78"
            // width="400"
            // height="200"
          ></iframe>

          <iframe
            title="Grafana Dashboard 3"
            src="http://localhost:3000/d-solo/rYdddlPWk/node-exporter-full?orgId=1&refresh=5s&from=1700621330570&to=now&panelId=152"
            // width="400"
            // height="200"
          ></iframe>

      </div>
    </div>
  );
};

export default NodeExporter;