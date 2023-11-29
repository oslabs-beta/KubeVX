const fs = require('fs');
const path = require('path');

const addClusterController = {};

addClusterController.add = (req, res) => {
  try {
    const { replicas, image, containerPort, servicePort } = req.body;

    // Update the webapp-deployment.yaml file
    const deploymentFilePath = path.join(
      __dirname,
      '../../webapp-deployment.yaml'
    );
    let deploymentFileContent = fs.readFileSync(deploymentFilePath, 'utf-8');

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

    fs.writeFileSync(deploymentFilePath, deploymentFileContent);

    // Update the webapp-service.yaml file
    const serviceFilePath = path.join(__dirname, '../../webapp-service.yaml');
    let serviceFileContent = fs.readFileSync(serviceFilePath, 'utf-8');

    serviceFileContent = serviceFileContent.replace(
      /port: \d+/,
      `port: ${servicePort}`
    );
    serviceFileContent = serviceFileContent.replace(
      /targetPort: \d+/,
      `targetPort: ${servicePort}`
    );

    fs.writeFileSync(serviceFilePath, serviceFileContent);

    res.json({ success: true, message: 'YAML files updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

module.exports = addClusterController;
