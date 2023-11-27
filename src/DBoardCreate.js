import React, { useState } from 'react';
import Navigation from './components/Navigation.jsx';
import '../src/public/register.css';
const DBaordCreate = () => {
  const [apiUrl, setApiUrl] = useState('');
  const [dashboardName, setDashboardName] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // Add your logic to send the data to the server or perform any other actions
    console.log('API URL:', apiUrl);
    console.log('Dashboard Name:', dashboardName);

    // You can redirect or perform other actions here if needed
  };

  return (
      <div className="registerContainer">
      <Navigation />
      <div className='content'>
        <h1>Register Your K8s cluster</h1>
        <form className="content" onSubmit={handleFormSubmit}>
          <input
            type="text"  // Use type="text" for a general text input
            placeholder="API URL"
            value={apiUrl}
            onChange={(e) => setApiUrl(e.target.value)}
          /> <br/>
          <input
            type="text"
            placeholder="Dashboard Name"
            value={dashboardName}
            onChange={(e) => setDashboardName(e.target.value)}
          /> <br/>
          <button type="submit">Register</button>
        </form>
        </div>
      </div>
  );
};

export default DBaordCreate;
