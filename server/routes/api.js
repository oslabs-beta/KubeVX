const express = require('express');
const addClusterController = require('../controllers/addClusterController')
const grafanaController = require('../controllers/grafanaController');
const learnK8sController = require('../controllers/learnK8sController');
const authController = require('../controllers/authController');
const clusterController = require('../controllers/clusterController');
const AIController = require('../controllers/AIController');
const metricsDataController = require('../controllers/metricsDataController');

const router = express.Router();

router.post('/addcluster', addClusterController.add)

router.get('/metrics', grafanaController.getMetrics);

router.post('/learnk8s', learnK8sController.addComponent);

router.get('/learnk8s/:name', learnK8sController.getComponent);

router.get('/clusterview', clusterController.fetchk8sComponents);

router.post('/AI', AIController.sendMessage);

router.post('/login', authController.login);

router.post('/register', authController.register);

router.get('/logout', authController.logout);

// Get PromQL queries for custom metrics page
router.get(
    '/getqueries',
    metricsDataController.allQueries,
    (req, res) => {
      res.status(200).json(res.locals.allQueries);
    }
  );
  
  router.get(
    '/metricspage',
    metricsDataController.getCPUUsageByNamespace,
    metricsDataController.getCPUUsageByPod,
    metricsDataController.getCPUUsageByNode,
    metricsDataController.getMemoryUsageByNamespace,
    metricsDataController.getMemoryUsageByNode,
    metricsDataController.getMemoryUsageByPod,
    metricsDataController.bytesTransmittedPerNamespace,
    metricsDataController.bytesTransmittedPerNode,
    metricsDataController.bytesTransmittedPerPod,
    metricsDataController.bytesReceivedPerNamespace,
    metricsDataController.bytesReceivedPerNode,
    metricsDataController.bytesReceivedPerPod,
    (req, res) => {
      const chartData = {
        getCPUUsageByNamespace: res.locals.getCPUUsageByNamespace,
        getCPUUsageByPod: res.locals.getCPUUsageByPod,
        getCPUUsageByNode: res.locals.getCPUUsageByNode,
        getMemoryUsageByNamespace: res.locals.getMemoryUsageByNamespace,
        getMemoryUsageByNode: res.locals.getMemoryUsageByNode,
        getMemoryUsageByPod: res.locals.getMemoryUsageByPod,
        bytesTransmittedPerNamespace: res.locals.bytesTransmittedPerNamespace,
        bytesTransmittedPerNode: res.locals.bytesTransmittedPerNode,
        bytesTransmittedPerPod: res.locals.bytesTransmittedPerPod,
        bytesReceivedPerNamespace: res.locals.bytesReceivedPerNamespace,
        bytesReceivedPerNode: res.locals.bytesReceivedPerNode,
        bytesReceivedPerPod: res.locals.bytesReceivedPerPod,
      };
      res.status(200).json(chartData);
    }
  );
  
  router.get(
    '/custommetrics',
    metricsDataController.getCustomQueryMetrics,
    (req, res) => {
      res.status(200).json(res.locals.getCustomQueryMetrics);
    }
  );


module.exports = router;
