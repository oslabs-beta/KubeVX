import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Navigation from './components/Navigation.jsx';
import '../src/public/addCluster.css';

const AddCluster = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    replicas: 2,
    image: 'nginx:latest',
    containerPort: 80,
    servicePort: 80,
    deploymentFilePath: '', 
    serviceFilePath: '',    
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/addcluster', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const responseData = await response.json();
        console.log(responseData);
        history.push('/maindashboard');
      } else {
        console.error('Failed to update and apply YAML files');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="addClusterContainer">
      <div>
        <Navigation />
      </div>

      <div className="formContainer">
        <h1>Add Cluster</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Replicas
            <input
              type="number"
              name="replicas"
              value={formData.replicas}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Image
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Container Port
            <input
              type="number"
              name="containerPort"
              value={formData.containerPort}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Service Port
            <input
              type="number"
              name="servicePort"
              value={formData.servicePort}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Deployment File Path
            <input
              type="text"
              name="deploymentFilePath"
              value={formData.deploymentFilePath}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Service File Path
            <input
              type="text"
              name="serviceFilePath"
              value={formData.serviceFilePath}
              onChange={handleChange}
            />
          </label>
          <br />
          <button type="submit">Add</button>
        </form>
      </div>
    </div>
  );
};

export default AddCluster;

