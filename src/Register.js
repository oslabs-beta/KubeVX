import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import '../src/public//register.css'; 

const Register = () => {
  const [fullName, setFullName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleRegister = async (e) => {
    e.preventDefault();
    // Add your registration logic here
    try {
      const response = await fetch('http://localhost:3001/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName, username, password }),
      });

      if (response.status === 201) {
        console.log('Registration successful');
        history.push('/'); // Navigate to the login route after successful registration
      } else {
        const data = await response.json();
        console.error('Registration failed:', await response.json());
        console.error('Registration failed:', data);
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleRegister}>
        <h2>Register</h2>
        <input 
          type="text" 
          placeholder="Full Name" 
          value={fullName} 
          onChange={(e) => setFullName(e.target.value)} 
        />
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
        <button type="submit" className="action-button">Register</button>
        <div className="back-to-login">
          <Link to="/login">Back to login</Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
