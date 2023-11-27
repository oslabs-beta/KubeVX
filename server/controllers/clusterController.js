const k8s = require('@kubernetes/client-node');

async function fetchk8sComponents() {
    const kc = new k8s.KubeConfig();
    kc.loadFromDefault();

    const k8sApi = kc.makeApiClient(k8s.CoreV1Api);

    try {
        const nodes = await k8sApi.listNode();
        const pods = await k8sApi.listPodForAllNamespaces();
        const services = await k8sApi.listServiceForAllNamespaces();

        return {
            nodes: nodes.body.items.map(node => node.metadata.name),
            pods: pods.body.items.map(pod => ({
                name: pod.metadata.name,
                nodeName: pod.spec.nodeName
            })),
            services: services.body.items.map(service => service.metadata.name),
        };
    } catch (err) {
        console.error('Error fetching Kubernetes components:', err);
        throw err;
    }
}

fetchk8sComponents()
    .then(components => console.log('Kubernetes Components:', components))
    .catch(err => console.error(err));
