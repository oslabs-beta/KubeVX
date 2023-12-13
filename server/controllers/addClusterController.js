const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const addClusterController = {};

addClusterController.add = (req, res) => {
  try {
    const {
      replicas,
      image,
      containerPort,
      servicePort,
      deploymentFilePath,
      serviceFilePath,
    } = req.body;

    // Update the webapp-deployment.yaml file
    const absoluteDeploymentFilePath = path.resolve(deploymentFilePath);
    // console.log('Absolute Deployment File Path:', absoluteDeploymentFilePath);

    let deploymentFileContent = fs.readFileSync(
      absoluteDeploymentFilePath,
      'utf-8'
    );

    deploymentFileContent = deploymentFileContent.replace(
      /replicas: \d+/,
      `replicas: ${replicas}`
    );
    deploymentFileContent = deploymentFileContent.replace(
      /image: \S+/,
      `image: ${image}`
    );
    deploymentFileContent = deploymentFileContent.replace(
      /containerPort: \d+/,
      `containerPort: ${containerPort}`
    );

    fs.writeFileSync(absoluteDeploymentFilePath, deploymentFileContent);

    // Update the webapp-service.yaml file
    const absoluteServiceFilePath = path.resolve(serviceFilePath);
    // console.log('Absolute Service File Path:', absoluteServiceFilePath);

    let serviceFileContent = fs.readFileSync(absoluteServiceFilePath, 'utf-8');

    serviceFileContent = serviceFileContent.replace(
      /port: \d+/,
      `port: ${servicePort}`
    );
    serviceFileContent = serviceFileContent.replace(
      /targetPort: \d+/,
      `targetPort: ${servicePort}`
    );

    fs.writeFileSync(absoluteServiceFilePath, serviceFileContent);

    // Execute kubectl apply commands
    const deployCmd = `kubectl apply -f ${absoluteDeploymentFilePath}`;
    const serviceCmd = `kubectl apply -f ${absoluteServiceFilePath}`;

    execSync(deployCmd);
    console.log('Deployment command executed successfully.');
    
    execSync(serviceCmd);
    console.log('Service command executed successfully.');

    res.json({
      success: true,
      message: 'YAML files updated and applied successfully',
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

module.exports = addClusterController;
