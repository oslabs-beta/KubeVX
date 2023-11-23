import React from 'react';

const NodeExporter = () => {
  return (
    <div className="section-container">
      <h4>NodeExporter</h4>
      <div className="iframe-row">
             <iframe
            title="Grafana Dashboard 5"
            src="http://localhost:3000/d-solo/rYdddlPWk/node-exporter-full?orgId=1&from=1700612283859&to=1700698683859&panelId=77"
            width="400"
            height="200"
          ></iframe>

          <iframe
            title="Grafana Dashboard 6"
            src="http://localhost:3000/d-solo/rYdddlPWk/node-exporter-full?orgId=1&from=1700612230428&to=1700698630428&panelId=78"
            width="400"
            height="200"
          ></iframe>

          <iframe
            title="Grafana Dashboard 3"
            src="http://localhost:3000/d-solo/rYdddlPWk/node-exporter-full?orgId=1&from=1700621330570&to=1700707730578&panelId=152"
            width="400"
            height="200"
          ></iframe>

      </div>
    </div>
  );
};

export default NodeExporter;