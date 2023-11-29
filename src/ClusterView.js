import React, { useState, useEffect } from 'react';
// import ReactFlow, { Background } from 'react-flow-renderer';
import Graph from 'react-graph-vis';
import Navigation from './components/Navigation.jsx';
import '../src/public/clusterView.css';
import 'vis-network/styles/vis-network.css';

const KubernetesFlow = () => {
    const [graphData, setGraphData] = useState({ nodes: [], edges: []});
    const [loading, setLoading]= useState(true);

    useEffect(() => {
        fetch('http://localhost:3001/clusterview')
          .then(response => response.json())
          .then(data => {
            //Process the data
            const { nodes, edges } = processClusterData(data);
            //console log!
            console.log('Data:', data);

            setGraphData({ nodes, edges });
            setLoading(false);
          })
          .catch(error => {
            console.error('Error fetching cluster data:', error);
            setLoading(false);
          });
    }, []);

      const processClusterData = (clusterData) => {
        const nodes = [];
        const edges = [];
       
        // Create nodes for each Kubernetes Node
        clusterData.nodes.forEach((node, index) => {
            nodes.push({
                id: `node-${index}`,
                //label: `Node: ${node}`,
                color: '#64C2A6', // idk what color this is
                shape: 'box',
                size: 80
            });
        });

        // Create nodes for each Pod
        clusterData.pods.forEach((pod, index) => {
            nodes.push({
                id: `pod-${index}`,
                // //label: `Pod: ${pod.name}`,
                color: '#FFD86E',
                shape: 'circle'
            });

            // Create edges from Node to Pod
            const nodeIndex = clusterData.nodes.indexOf(pod.nodeName);
            if (nodeIndex !== -1) {
                edges.push({ 
                    from: `node-${nodeIndex}`, 
                    to: `pod-${index}`, 
                    length: 200,
                    arrows: 'to'
                });
            }
        });

        // Map Services to graph nodes
        clusterData.services.forEach((service, index) => {
            nodes.push({
                id: `service-${index}`,
                //label: `Service: ${service}`,
                color: '#6DAFFF',
                shape: 'diamond'
            });
            
            // Create edges from Service to Pod
            clusterData.serviceToPods[service].forEach(podName => {
                const podIndex = clusterData.pods.findIndex(pod => pod.name === podName);
                    if (podIndex !== -1) {
                        edges.push({ 
                            from: `service-${index}`, 
                            to: `pod-${podIndex}`, 
                            length: 100,
                            arrows: 'to'
                        });
                    }
                });
         });

        // Create nodes for each Deployment
        clusterData.deployments.forEach((deployment, index) => {
            nodes.push({
                id: `deployment-${index}`,
                //label: `Deployment: ${deployment}`,
                color: '#FFA07A',
                shape: 'star' 
            });

            // Create edges from Deployment to Pod (based on naming convention or //label matching)
            clusterData.pods.forEach((pod, podIndex) => {
                if (pod.name.includes(deployment)) {
                    edges.push({ 
                        from: `deployment-${index}`, 
                        to: `pod-${podIndex}`,
                        length: 150,
                        arrows: 'to'
                    });
                }
            });
        });
        return { nodes, edges }
      }

      const graphOptions = {
        layout: {
            hierarchical: false
        },
        edges: {
            color: '#000000'
        },
        height: '600px',
        interaction: {
            hover: true,
        }

      };

    if(loading) {
        return <div>Loading...</div>
    }
    const containerStyle = {
      display: 'flex',
      width: '100%',
      height: '600px',
      border: '1px solid black'
    };
    // console.log('elements:', elements)
    return (
      <div className='cluster-container'>
        <Navigation className='navigation'/>
        <Graph graph={ graphData } options={graphOptions} />
      </div>
    );
};

export default KubernetesFlow;
