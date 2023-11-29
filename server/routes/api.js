const express = require('express');
const addClusterController = require('../controllers/addClusterController')
const grafanaController = require('../controllers/grafanaController');
const learnK8sController = require('../controllers/learnK8sController');
const authController = require('../controllers/authController');
const clusterController = require('../controllers/clusterController')

const router = express.Router();

router.post('/addcluster', addClusterController.add)

router.get('/metrics', grafanaController.getMetrics);

router.post('/learnk8s', learnK8sController.addComponent);

router.get('/learnk8s/:name', learnK8sController.getComponent);

router.get('/clusterview', clusterController.fetchk8sComponents);

router.post('/login', authController.login);

router.post('/register', authController.register);

router.get('/logout', authController.logout);


// router.get('/register')


module.exports = router;
