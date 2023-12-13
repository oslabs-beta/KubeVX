import React, { useState, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { UserContext } from './UserContext';
import {
  GoogleOAuthProvider,
  GoogleLogin,
  googleLogout,
} from '@react-oauth/google';
import '../src/public/login.css';
import { jwtDecode } from 'jwt-decode';

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

  // Handle Google Sign-In
  // const handleGoogleLogin = async () => {
  //   try {
  //     const response = await fetch(
  //       'http://localhost:3001/auth/google/callback',
  //       {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         // Send any additional data needed for Google Sign-In
  //         body: JSON.stringify({}),
  //       }
  //     );

  //     if (response.status === 200) {
  //       const credentialResponse = await response.json();
  //       console.log('Google login successful:', credentialResponse);

  //       // Handle the Google login response, e.g., set user in context, redirect, etc.
  //       // setUser({ username: 'googleUser' }); // Replace with actual user data

  //       // Redirect to the /addcluster endpoint
  //       history.push('/addcluster');
  //     } else {
  //       console.error('Google login failed');
  //       // Optionally handle the error in UI
  //     }
  //   } catch (error) {
  //     console.error('Error during Google login:', error);
  //     // Optionally handle the error in UI
  //   }
  // };

  return (
    <GoogleOAuthProvider clientId="449928318459-br0l4qgp1pcdrovejclsrs11jhqt6hvq.apps.googleusercontent.com">
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
          <button type="submit" className="action-button">
            Login
          </button>
          <button
            type="button"
            onClick={navigateToRegister}
            className="action-button"
          >
            Create a new account
          </button>
          <div className="or-line">
            <span className="or-text">or</span>
          </div>
          <div className="google-login-container">
            <GoogleLogin
              onSuccess={(credentialResponse) => {
                const details = jwtDecode(credentialResponse.credential);
                console.log(credentialResponse);
                console.log('Login successful');
                history.push('/addcluster');
              }}
              onError={() => {
                console.log('Login Failed');
              }}
            />
          </div>
          <div className="back-to-dashboard">
            <Link to="/addcluster">Back to Main Dashboard</Link>
          </div>
        </form>
      </div>
    </GoogleOAuthProvider>
  );
};

export default Login;
