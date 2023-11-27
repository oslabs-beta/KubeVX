import React, { useState, useEffect } from 'react';
import Navigation from './components/Navigation.jsx';
import '../src/public/learnK8s.css';

const fetchDefinition = async (component) => {
  try {
    const response = await fetch(`http://localhost:3001/learnk8s/${component}`);
    if (response.ok) {
      const data = await response.json();
      return data.definition;
    } else {
      console.error('Error fetching definition:', response.status);
      return 'Error fetching definition';
    }
  } catch (error) {
    console.error('Error fetching definition:', error);
    return 'Error fetching definition';
  }
};

const K8sComponent = ({ className, componentName, onClick }) => {
  return (
    <div className={className} onClick={onClick}>
      <p>{componentName}</p>
    </div>
  );
};

const PodContainer = ({ onComponentClick }) => {
  return (
    <div className="pod-container">
      <div className="pod" onClick={() => onComponentClick('pod')}>
        <p className="pod-text">Pod</p>
      </div>
      <div className="container" onClick={() => onComponentClick('container')}>
        <p className="container-text">Container</p>
      </div>
      <div className="container" onClick={() => onComponentClick('container')}>
        <p className="container-text">Container</p>
      </div>
    </div>
  );
};

const ContainerF = ({ onComponentClick }) => {
  return (
    <div className="containerF">
        <K8sComponent
        className="kubelet"
        componentName="Kubelet"
        onClick={() => onComponentClick('kubelet')}
      />
        <K8sComponent
        className="kube-proxy"
        componentName="Kube Proxy"
        onClick={() => onComponentClick('kubeproxy')}
      />
      <div className="pod" onClick={() => onComponentClick('pod')}>
        <PodContainer onComponentClick={onComponentClick} />
      </div>
      <div className="pod" onClick={() => onComponentClick('pod')}>
        <PodContainer onComponentClick={onComponentClick} />
      </div>
    </div>
  );
};

const ContainerG = ({ onComponentClick }) => {
  return (
    <div className="containerG">
      <K8sComponent
        className="worker-node"
        componentName="Worker Node"
        onClick={() => onComponentClick('workernode')}
      />
      <ContainerF onComponentClick={onComponentClick} />
    </div>
  );
};

const ContainerE = ({ onComponentClick }) => {
  return (
    <div className="containerE">
      <ContainerG onComponentClick={onComponentClick} />
      <ContainerG onComponentClick={onComponentClick} />
    </div>
  );
};

const ContainerD = ({ onComponentClick }) => {
  return (
    <div className="containerD">
       <K8sComponent
        className="api-server"
        componentName="API Server"
        onClick={() => onComponentClick('apiserver')}
      />
      <K8sComponent
        className="scheduler"
        componentName="Scheduler"
        onClick={() => onComponentClick('scheduler')}
      />
       <K8sComponent
        className="controller-manager"
        componentName="Controller Manager"
        onClick={() => onComponentClick('controllermanager')}
      />
      <K8sComponent
        className="etcd"
        componentName="etcd"
        onClick={() => onComponentClick('etcd')}
      />
    </div>
  );
};

const ContainerC = ({ onComponentClick }) => {
  return (
    <div className="containerC">
      <K8sComponent
        className="master-node"
        componentName="Master Node"
        onClick={() => onComponentClick('masternode')}
      />
      <ContainerD onComponentClick={onComponentClick} />
    </div>
  );
};

const ContainerA = ({ onComponentClick }) => {
  return (
    <div className="containerA">
      <K8sComponent
        className="cluster"
        componentName="Cluster"
        onClick={() => onComponentClick('cluster')}
      />
      <ContainerC onComponentClick={onComponentClick} />
      <ContainerE onComponentClick={onComponentClick} />
    </div>
  );
};

const ContainerB = ({ definition, showDefinition }) => {
  return (
    <div className="containerB">
      <p>Definition:</p>
      {showDefinition && <p>{definition}</p>}
    </div>
  );
};

const LearnK8s = () => {
  const [showDefinition, setShowDefinition] = useState(false);
  const [definition, setDefinition] = useState('');

  // Fetch initial definition when the component mounts
  const fetchInitialDefinition = async () => {
    try {
      const initialDefinition = await fetchDefinition('initialDefinition');
      setDefinition(initialDefinition);
      setShowDefinition(true);
    } catch (error) {
      console.error('Error fetching initial definition:', error);
    }
  };

  const handleComponentClick = async (componentName) => {
    try {
      const fetchedDefinition = await fetchDefinition(
        componentName.toLowerCase()
      );
      setDefinition(fetchedDefinition);
      setShowDefinition(true);
    } catch (error) {
      console.error(`Error handling ${componentName} click:`, error);
    }
  };

  useEffect(() => {
    fetchInitialDefinition();
  }, []);

  return (
    <div className="learnK8s">
      <Navigation />
      <ContainerA onComponentClick={handleComponentClick} />
      <ContainerB definition={definition} showDefinition={showDefinition} />
    </div>
  );
};

export default LearnK8s;
