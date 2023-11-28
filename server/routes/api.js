const express = require('express');
const grafanaController = require('../controllers/grafanaController');
const learnK8sController = require('../controllers/learnK8sController');
const clusterController = require('../controllers/clusterController')
const router = express.Router();

router.get('/metrics', grafanaController.getMetrics);

router.post('/learnk8s', learnK8sController.addComponent);

router.get('/learnk8s/:name', learnK8sController.getComponent);

router.get('/clusterview', clusterController.fetchk8sComponents);

module.exports = router;
