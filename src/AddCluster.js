import React, { useState } from 'react';
import Navigation from './components/Navigation.jsx';
import '../src/public/addCluster.css';

const AddCluster = () => {
  const [formData, setFormData] = useState({
    replicas: 2,
    image: 'nginx:latest',
    containerPort: 80,
    servicePort: 80,
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
      } else {
        console.error('Failed to update YAML files');
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="addClusterContainer">
      <Navigation />
      <div className="formContainer">
        <h1>Add Cluster</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Replicas:
            <input
              type="number"
              name="replicas"
              value={formData.replicas}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Image:
            <input
              type="text"
              name="image"
              value={formData.image}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Container Port:
            <input
              type="number"
              name="containerPort"
              value={formData.containerPort}
              onChange={handleChange}
            />
          </label>
          <br />
          <label>
            Service Port:
            <input
              type="number"
              name="servicePort"
              value={formData.servicePort}
              onChange={handleChange}
            />
          </label>
          <br />
          <button type="submit">Update YAML</button>
        </form>
      </div>
    </div>
  );
};

export default AddCluster;
