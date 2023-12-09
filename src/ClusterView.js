import React, { useState, useEffect } from 'react';
// import ReactFlow, { Background } from 'react-flow-renderer';
import Graph from 'react-graph-vis';
import Navigation from './components/Navigation.jsx';
import ClusterChat from './ClusterChat.js';
import '../src/public/clusterView.css';
import 'vis-network/styles/vis-network.css';

import nodeImage from './public/assets/node-128.png';
import podImage from './public/assets/pod-128.png';
import serviceImage from './public/assets/svc-128.png';
import deploymentImage from './public/assets/deploy-128.png';

const KubernetesFlow = () => {
  const [graphData, setGraphData] = useState({ nodes: [], edges: [] });
  const [loading, setLoading] = useState(true);
  const [clusterData, setclusterData] = useState({});

  useEffect(() => {
    fetch('http://localhost:3001/clusterview')
      .then((response) => response.json())
      .then((data) => {
        //Process the data
        // console.log('Data:', data)
        const { nodes, edges } = processClusterData(data);
        setclusterData(data);

        setGraphData({ nodes, edges });
        setLoading(false);
      })
      .catch((error) => {
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
        title: `Node: ${node}`, // label would be the same thing
        // color: '#64C2A6', // idk what color this is
        // color: 'MidnightBlue',
        // shape: 'box',
        shape: 'image',
        image: nodeImage,
        size: 40,
      });
    });

    // Create nodes for each Pod
    clusterData.pods.forEach((pod, index) => {
      nodes.push({
        id: `pod-${index}`,
        title: `Pod: ${pod.name}`,
        // color: '#FFD86E',
        // color: 'RoyalBlue',
        // shape: 'circle',
        shape: 'image',
        image: podImage
      });

      // Create edges from Node to Pod
      const nodeIndex = clusterData.nodes.indexOf(pod.nodeName);
      if (nodeIndex !== -1) {
        edges.push({
          from: `node-${nodeIndex}`,
          to: `pod-${index}`,
          length: 100,
          arrows: 'to',
        });
      }
    });

    // Map Services to graph nodes
    clusterData.services.forEach((service, index) => {
      nodes.push({
        id: `service-${index}`,
        title: `Service: ${service}`,
        // color: '#6DAFFF',
        // color: 'SeaGreen',
        // shape: 'diamond',
        shape: 'image',
        image: serviceImage
      });

      // Create edges from Service to Pod
      clusterData.serviceToPods[service].forEach((podName) => {
        const podIndex = clusterData.pods.findIndex(
          (pod) => pod.name === podName
        );
        if (podIndex !== -1) {
          edges.push({
            from: `service-${index}`,
            to: `pod-${podIndex}`,
            length: 100,
            arrows: 'to',
          });
        }
      });
    });

    // Create nodes for each Deployment
    clusterData.deployments.forEach((deployment, index) => {
      nodes.push({
        id: `deployment-${index}`,
        title: `Deployment: ${deployment}`,
        // color: '#FFA07A',
        // color: 'SpringGreen',
        // shape: 'star',
        shape: 'image',
        image: deploymentImage
      });

      // Create edges from Deployment to Pod (based on naming convention or //label matching)
      clusterData.pods.forEach((pod, podIndex) => {
        if (pod.name.includes(deployment)) {
          edges.push({
            from: `deployment-${index}`,
            to: `pod-${podIndex}`,
            length: 150,
            arrows: 'to',
          });
        }
      });
    });
    return { nodes, edges };
  };

  const graphOptions = {
    layout: {
      hierarchical: false, // try switching to true
    },
    edges: {
      color: '#000000',
    },
    height: '1000px',
    interaction: {
      hover: true,
      tooltipDelay: 250,
    },
  };

  const events = {
    select: function (event) {
      var { nodes, edges } = event;
    },
  };

  if (loading) {
    return <div>Loading...</div>;
  }
  // console.log('elements:', elements)
  return (
    <div className="cluster-container">
      <Navigation className="navigation" />
      <div className="clusterDisplay">
        <h1 className="ClusterTitl">Cluster View</h1>
        <Graph graph={graphData} options={graphOptions} events={events} />
      </div>
      <ClusterChat clusterData={clusterData} />
    </div>
  );
};

export default KubernetesFlow;
