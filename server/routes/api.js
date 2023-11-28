const express = require('express');
const grafanaController = require('../controllers/grafanaController');
const learnK8sController = require('../controllers/learnK8sController');
const authController = require('../controllers/authController');
const router = express.Router();

router.get('/metrics', grafanaController.getMetrics);

router.post('/learnk8s', learnK8sController.addComponent);

router.get('/learnk8s/:name', learnK8sController.getComponent);

router.get('/clusterview')

router.post('/login', authController.login);

router.post('/register', authController.register);

router.get('/logout', authController.logout);


module.exports = router;
