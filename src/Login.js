import React, { useState, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { UserContext } from './UserContext';
import '../src/public/login.css'; 

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { user, setUser } = useContext(UserContext);
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
        const response = await fetch('http://localhost:3001/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });
  
        if (response.status === 200) {
          console.log('Login successful');
          setUser({ username }); // Set user in context
          history.push('/addcluster'); // Redirect to add cluster
        } else {
          const data = await response.json();
          console.error('Login failed:', data.message);
          // Optionally handle the error in UI
        }
      } catch (error) {
        console.error('Error during login:', error);
        // Optionally handle the error in UI
      }
    };

    const navigateToRegister = () => {
      history.push('/register'); // Navigate to the register route
    };


  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <input 
          type="text" 
          placeholder="Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
        />
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />
        <button type="submit" className="action-button">Login</button>
        <button type="button" onClick={navigateToRegister} className="action-button">
          Create a new account
        </button>
        <div className="back-to-dashboard">
          <Link to="/addcluster">Back to Main Dashboard</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
