const k8s = require('@kubernetes/client-node');

const kc = new k8s.KubeConfig();

// Load the default kubeconfig
kc.loadFromDefault();

// Get context from an environment variable or command-line argument
const desiredContext = process.env.CLUSTER_CONTEXT || 'minikube';

// Find the specified context or use the current context
const context = kc.contexts.find(c => c.name === desiredContext) || kc.currentContext;

if (!context) {
    console.error(`No active context found for ${desiredContext}!`);
    process.exit(1);
}

kc.setCurrentContext(context.name);

const k8sApi = kc.makeApiClient(k8s.CoreV1Api);

k8sApi.listNode()
    .then((res) => {
        console.log('Nodes:', res.body.items.map(node => node.metadata.name));
        console.log('res.body log:', res.body.items)
    })
    .catch((err) => {
        console.error('Error:', err);
    });
