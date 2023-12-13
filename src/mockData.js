const mockData = {
    data: {
      groups: [
        {
          name: 'PodAlerts',
          rules: [
            {
              state: 'active',
              name: 'HighCpuPod',
              labels: { severity: 'high' },
              annotations: { description: 'High CPU Usage in Pod', summary: 'High CPU Alert' },
              alerts: [
                {
                  activeAt: '2023-01-01T12:00:00Z',
                  state: 'firing',
                  labels: {
                    container: 'nginx-container',
                    instance: 'pod-1234567890-abcde',
                    job: 'kubernetes-pods',
                    namespace: 'default',
                    statefulset: '',
                  },
                  annotations: {
                    description: 'CPU usage exceeds 90%',
                    summary: 'High CPU Usage',
                  },
                },
              ],
            },
            {
              state: 'active',
              name: 'MemoryLeakPod',
              labels: { severity: 'medium' },
              annotations: { description: 'Memory Leak in Pod', summary: 'Medium Memory Alert' },
              alerts: [
                {
                  activeAt: '2023-01-01T14:30:00Z',
                  state: 'firing',
                  labels: {
                    container: 'app-container',
                    instance: 'pod-0987654321-edcba',
                    job: 'kubernetes-pods',
                    namespace: 'production',
                    statefulset: '',
                  },
                  annotations: {
                    description: 'Memory leak detected',
                    summary: 'Medium Memory Alert',
                  },
                },
              ],
            },
          ],
        },
        {
          name: 'NodeAlerts',
          rules: [
            {
              state: 'active',
              name: 'OutOfMemoryNode',
              labels: { severity: 'critical' },
              annotations: { description: 'Node Out of Memory', summary: 'Critical Memory Alert' },
              alerts: [
                {
                  activeAt: '2023-01-01T15:30:00Z',
                  state: 'firing',
                  labels: {
                    instance: 'minikube-node',
                    job: 'kubernetes-nodes',
                    namespace: '',
                    statefulset: '',
                  },
                  annotations: {
                    description: 'Node is running out of memory',
                    summary: 'Critical Memory Alert',
                  },
                },
              ],
            },
            {
              state: 'active',
              name: 'NetworkOutageNode',
              labels: { severity: 'high' },
              annotations: { description: 'Node Network Outage', summary: 'High Network Alert' },
              alerts: [
                {
                  activeAt: '2023-01-01T18:45:00Z',
                  state: 'firing',
                  labels: {
                    instance: 'minikube-node',
                    job: 'kubernetes-nodes',
                    namespace: '',
                    statefulset: '',
                  },
                  annotations: {
                    description: 'Network outage detected on the node',
                    summary: 'High Network Alert',
                  },
                },
              ],
            },
          ],
        },
        {
          name: 'DeploymentAlerts',
          rules: [
            {
              state: 'active',
              name: 'ReplicaMismatchDeployment',
              labels: { severity: 'medium' },
              annotations: { description: 'Mismatch in Replica Count', summary: 'Medium Replica Alert' },
              alerts: [
                {
                  activeAt: '2023-01-02T09:15:00Z',
                  state: 'firing',
                  labels: {
                    instance: 'web-deployment',
                    job: 'kubernetes-deployments',
                    namespace: 'development',
                    statefulset: '',
                  },
                  annotations: {
                    description: 'Mismatch in replica count detected',
                    summary: 'Medium Replica Alert',
                  },
                },
              ],
            },
            {
              state: 'active',
              name: 'ImagePullFailureDeployment',
              labels: { severity: 'high' },
              annotations: { description: 'Image Pull Failure in Deployment', summary: 'High Image Alert' },
              alerts: [
                {
                  activeAt: '2023-01-02T11:30:00Z',
                  state: 'firing',
                  labels: {
                    instance: 'api-deployment',
                    job: 'kubernetes-deployments',
                    namespace: 'production',
                    statefulset: '',
                  },
                  annotations: {
                    description: 'Image pull failure detected in the deployment',
                    summary: 'High Image Alert',
                  },
                },
              ],
            },
          ],
        },
        {
          name: 'StatefulSetAlerts',
          rules: [
            {
              state: 'active',
              name: 'StorageFullStatefulSet',
              labels: { severity: 'critical' },
              annotations: { description: 'Storage Full in StatefulSet', summary: 'Critical Storage Alert' },
              alerts: [
                {
                  activeAt: '2023-01-02T11:30:00Z',
                  state: 'firing',
                  labels: {
                    instance: 'db-statefulset',
                    job: 'kubernetes-statefulsets',
                    namespace: 'production',
                    statefulset: 'db-statefulset',
                  },
                  annotations: {
                    description: 'Storage is full in the StatefulSet',
                    summary: 'Critical Storage Alert',
                  },
                },
              ],
            },
            {
              state: 'active',
              name: 'PodTerminationFailureStatefulSet',
              labels: { severity: 'medium' },
              annotations: { description: 'Pod Termination Failure in StatefulSet', summary: 'Medium Termination Alert' },
              alerts: [
                {
                  activeAt: '2023-01-02T14:45:00Z',
                  state: 'firing',
                  labels: {
                    instance: 'app-statefulset',
                    job: 'kubernetes-statefulsets',
                    namespace: 'staging',
                    statefulset: 'app-statefulset',
                  },
                  annotations: {
                    description: 'Pod termination failure detected in the StatefulSet',
                    summary: 'Medium Termination Alert',
                  },
                },
              ],
            },
          ],
        },
      ],
    },
  };
  
  export default mockData;
  