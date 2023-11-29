const k8s = require('@kubernetes/client-node');
const clusterController = {};

clusterController.fetchk8sComponents = async (req, res) => {
    const kc = new k8s.KubeConfig();
    kc.loadFromDefault();

    const coreApi = kc.makeApiClient(k8s.CoreV1Api);
    const appsApi = kc.makeApiClient(k8s.AppsV1Api);

    try {
        const nodes = await coreApi.listNode();
        const pods = await coreApi.listPodForAllNamespaces();
        const services = await coreApi.listServiceForAllNamespaces();
        const deployments = await appsApi.listDeploymentForAllNamespaces();

        //Create a map of services to pods based on selectors
        const serviceToPods = services.body.items.reduce((acc, service) => {
            const matchingPods = pods.body.items.filter(pod =>
                matchLabels(pod.metadata.labels, service.spec.selector)).map(pod => pod.metadata.name);

                acc[service.metadata.name] = matchingPods;
                return acc;
        }, {});

        res.json({
            nodes: nodes.body.items.map(node => node.metadata.name),
            pods: pods.body.items.map(pod => ({
                name: pod.metadata.name,
                nodeName: pod.spec.nodeName
            })),
            services: services.body.items.map(service => service.metadata.name), serviceToPods,
            deployments: deployments.body.items.map(deployment => deployment.metadata.name)
        });
    } catch (err) {
        console.error('Error fetching Kubernetes components:', err);
        res.status(500).send('Error fetching Kubernetes components')
    }
}

const matchLabels = (podLabels, serviceSelector) => {
    if (!podLabels || !serviceSelector) return false;
    return Object.keys(serviceSelector).every(key => serviceSelector[key] === podLabels[key]);
}

// fetchk8sComponents()
//     .then(components => console.log('Kubernetes Components:', components))
//     .catch(err => console.error(err));

module.exports = clusterController;
