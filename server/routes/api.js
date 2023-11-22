const express = require('express');
const grafanaController = require('../controllers/grafanaController');
const learnK8sController = require('../controllers/learnK8sController');
const router = express.Router();

router.get('/metrics', grafanaController.getMetrics);

router.post('/learnk8s', learnK8sController.addComponent);

router.get('/learnk8s', learnK8sController.getComponent);

module.exports = router;
