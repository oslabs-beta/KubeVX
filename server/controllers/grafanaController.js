const grafanaController = {};

grafanaController.getMetrics = async (req, res) => {
    try {
      // Await the resolution of the metrics data
      const metricsData = await prometheus.register.metrics();
      const metricsBuffer = Buffer.from(metricsData); // Convert the metrics data to a Buffer
      res.set('Content-Type', prometheus.register.contentType);
      res.end(metricsBuffer); // Send the metrics data as a Buffer
    } catch (error) {
      console.error('Error fetching metrics:', error);
      res.status(500).send('Internal Server Error');
    }
  }

module.exports = grafanaController;
